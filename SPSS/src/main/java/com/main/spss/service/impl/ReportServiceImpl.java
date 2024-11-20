package com.main.spss.service.impl;

import com.main.spss.repository.ReportRepository;
import com.main.spss.service.ReportService;
import com.main.spss.payload.response.ApiResponse;
import com.main.spss.utils.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.awt.print.PrinterJob;
import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.io.InputStream;

import javax.print.Doc;
import javax.print.DocFlavor;
import javax.print.DocPrintJob;
import javax.print.PrintException;
import javax.print.PrintService;
import javax.print.SimpleDoc;
import javax.print.attribute.HashPrintRequestAttributeSet;
import javax.print.attribute.PrintRequestAttributeSet;
import javax.print.attribute.standard.Copies;
import javax.print.attribute.standard.MediaSizeName;
import javax.print.attribute.standard.Sides;
import javax.print.event.PrintJobAdapter;
import javax.print.event.PrintJobEvent;

@Service
@RequiredArgsConstructor
public class ReportServiceImpl extends PrintJobAdapter implements ReportService {

    private final ReportRepository reportRepository;

    private static boolean jobRunning = true;

    private final EmailService emailService;
    @Override
    @Scheduled(cron = "0 0 23 L * ?", zone = "Asia/Ho_Chi_Minh") //Last day of the month
    public ApiResponse generateAutoReport() {
        try {
            ApiResponse response = new ApiResponse();
            //find printer
            PrintService[] printServices = PrinterJob.lookupPrintServices();
            if (printServices.length == 0) {
                return null;
            }
            PrintService selectedPrinter = printServices[0];
            /* *
            *
            *   Hiện thực đọc dữ liệu từ database de tao file report
            *
            *
            * */

            InputStream is = new BufferedInputStream(new FileInputStream("data/test.pdf"));

            // Set the document type: create a PDF doc flavor
            DocFlavor myFormat = DocFlavor.INPUT_STREAM.PDF;
            // Create a Doc
            Doc myDoc = new SimpleDoc(is, myFormat, null);
            //Attributes document
            PrintRequestAttributeSet attributes = new HashPrintRequestAttributeSet();
            attributes.add(new Copies(1));
            attributes.add(MediaSizeName.ISO_A4);
            attributes.add(Sides.DUPLEX);

            //print
            DocPrintJob printJob = selectedPrinter.createPrintJob();
            // register a listener to get notified when the job is complete
            printJob.addPrintJobListener(new PrintJobAdapter() {
                @Override
                public void printJobCompleted(PrintJobEvent pje) {
                    jobRunning = false;
                    emailService.sendEmail("","","Report monthly");
                }
            });
            try {
                // Print a document with the specified job attributes.
                printJob.print(myDoc, attributes);
                while (jobRunning) {
                    Thread.sleep(1000);
                }
            } catch (PrintException pe) {
            }

            return null;
        } catch (Exception e) {
            return null;
        }
    }
}
