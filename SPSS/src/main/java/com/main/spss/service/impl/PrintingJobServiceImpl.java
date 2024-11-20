package com.main.spss.service.impl;

import com.main.spss.dto.PrinterDTO;
import com.main.spss.dto.PrintingPropertiesDTO;
import com.main.spss.entity.PrintJob;
import com.main.spss.repository.PrinterRepository;
import com.main.spss.repository.PrintingJobRepository;
import com.main.spss.repository.UserRepository;
import com.main.spss.security.UserPrincipal;
import com.main.spss.service.PrintingJobService;
import com.main.spss.utils.ApiResponseCode;
import com.main.spss.utils.EmailService;
import com.main.spss.enums.EPrintingStatus;
import com.main.spss.payload.request.PrintRequest;
import com.main.spss.payload.response.ApiResponse;
import org.cups4j.CupsClient;
import org.cups4j.CupsPrinter;
import org.cups4j.PrintRequestResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.net.URL;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.LinkedBlockingQueue;

@Service
public class PrintingJobServiceImpl implements PrintingJobService{
    @Autowired
    EmailService emailService;

    @Autowired
    PrintingJobRepository printingJobRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    PrinterRepository printerRepository;

    private final ConcurrentHashMap<Long, BlockingQueue<PrintRequest>> printerQueues = new ConcurrentHashMap<>();
    private final ConcurrentHashMap<Long, Boolean> printerStatus = new ConcurrentHashMap<>();

    @Override
    public ApiResponse addRequest(UserPrincipal userPrincipal, PrintRequest request) {
        ApiResponse apiResponse = new ApiResponse();
        if (!validateRequest(request)) {
            return apiResponse.builder()
                    .message("Request invalid!")
                    .success(false)
                    .errorCode(ApiResponseCode.REQUEST_PRINT_INVALID)
                    .build();     
        }

        //Create new request
        Long printerId = request.getPrinterDTO().getPrinterId();
        //Check printer is empty
        BlockingQueue<PrintRequest> requestQueue = printerQueues
                .computeIfAbsent(printerId, id -> new LinkedBlockingQueue<>());
        requestQueue.offer(request);

        //If queue printer is empty, start
        synchronized (printerStatus) {
            if (printerStatus.putIfAbsent(printerId, true) == null ||
                    !printerStatus.get(printerId)) {
                printerStatus.put(printerId, true);
                new Thread(() -> processQueue(printerId)).start();
            }
        }

        return apiResponse.builder().message("Request success!").success(true).build();
    }

    private void processQueue(Long printerId) {
        try {
            BlockingQueue<PrintRequest> requestQueue = printerQueues.get(printerId);
            while (true) {
                PrintRequest request = requestQueue.poll();
                if (request == null) break;
                boolean result = processPrintJob(request);
                saveLogPrint(request.getEmail(), request.getPrinterDTO());
                emailService.sendEmail(request.getEmail(),"HCMUT-SPSS","Printed " + EPrintingStatus.COMPLETED);
                System.out.println("Job for printer " + printerId + " processed: " + result);
            }
        } finally {
            //When printer done
            synchronized (printerStatus) {
                printerStatus.put(printerId, false);
                // If have new request in printer queue, restart
                if (!printerQueues.get(printerId).isEmpty()) {
                    printerStatus.put(printerId, true);
                    new Thread(() -> processQueue(printerId)).start();
                }
            }
        }
    }

    private boolean processPrintJob(PrintRequest request) {
        try {
            CupsClient cupsClient = new CupsClient("127.0.0.1", 631);
            URL printerURL = new URL(request.getPrinterDTO().getIpAddress());
            CupsPrinter cupsPrinter = cupsClient.getPrinter(printerURL);

            // Init attribution of print
            Map<String, String> attributes = new HashMap<>();
            attributes.put("compression", "none");
            attributes.put("job-attributes", "print-quality:enum:3#fit-to-page:boolean:true#sheet-collate:keyword:collated");

            for (File file : request.getFiles()) {
                InputStream inputStream = new FileInputStream(file);
                org.cups4j.PrintJob printJob = new org.cups4j.PrintJob.Builder(inputStream)
                        .jobName("job-name")
                        .userName(request.getEmail())
                        .copies(request.getPrintParameters().getNumberOfCopies())
                        .pageRanges(request.getPrintParameters().getPages())
                        .duplex(request.getPrintParameters().getIsDuplex())
                        .portrait(request.getPrintParameters().getOrientation() == 0)
                        .color(request.getPrintParameters().getColor())
                        .pageFormat(request.getPrintParameters().getPageSize().name())
                        .resolution("300dpi")
                        .attributes(attributes)
                        .build();

                PrintRequestResult resultPrint = cupsPrinter.print(printJob);
                System.out.println("Print job status: " + resultPrint.getResultCode());
                if (resultPrint.isSuccessfulResult()) {
                    request.setStatus(EPrintingStatus.COMPLETED);
                } else {
                    request.setStatus(EPrintingStatus.FAILED);
                }
            }
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            request.setStatus(EPrintingStatus.FAILED);
            return false;
        }
    }

    private void saveLogPrint(String email, PrinterDTO printerDTO) {
        PrintJob printJob = new PrintJob();
        printJob.setUser(userRepository.findUserByEmail(email).get());
        printJob.setPrinter(printerRepository.findById(printerDTO.getPrinterId()).get());
        printingJobRepository.save(printJob);
    }

    private boolean validateRequest(PrintRequest request){
        return true;
    }
}
