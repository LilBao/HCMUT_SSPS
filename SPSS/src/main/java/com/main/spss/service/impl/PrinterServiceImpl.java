package com.main.spss.service.impl;

import com.main.spss.dto.PrinterDTO;
import com.main.spss.entity.Printer;
import com.main.spss.entity.User;
import com.main.spss.repository.PrinterRepository;
import com.main.spss.security.UserPrincipal;
import com.main.spss.service.PrinterService;
import com.main.spss.payload.response.ApiResponse;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
@Service
@RequiredArgsConstructor
public class PrinterServiceImpl implements PrinterService {
    private final PrinterRepository printerRepository;

    private final ModelMapper modelMapper;
    @Override
    public ApiResponse savePrinter(PrinterDTO printerDTO, UserPrincipal userPrincipal) {
        ApiResponse apiResponse = new ApiResponse();
        User user = userPrincipal.toUser();

        Printer printer = printerRepository.findById(printerDTO.getPrinterId()).orElseGet(() -> {
                    Printer newPrinter = new Printer();
                    newPrinter.setCreatedAt(new Date());
                    newPrinter.setCreatedBy(user.getId());
                    return newPrinter;
        });

        modelMapper.map(printerDTO, printer);
        printer.setModifiedBy(user.getId());
        printer.setModifiedAt(new Date());
        printerRepository.save(printer);

        return apiResponse.builder()
                .message("Create success")
                .success(true)
                .data(new PrinterDTO(printer))
                .build();
    }

    @Override
    public ApiResponse deletePrinter(Long printerId) {
        ApiResponse apiResponse = new ApiResponse();
        Printer printer = printerRepository.findById(printerId).orElseThrow(() -> new EntityNotFoundException("Data not found"));
        printerRepository.delete(printer);
        return  apiResponse.builder()
                .message("Delete success")
                .success(true)
                .build();
    }

    @Override
    public ApiResponse getPrinterById(Long printerId) {
        ApiResponse apiResponse = new ApiResponse();
        Printer printer = printerRepository.findById(printerId).orElseThrow(() -> new EntityNotFoundException("Data not found"));
        PrinterDTO printerDTO = new PrinterDTO(printer);
        return apiResponse.builder().message("Finding success").success(true).data(printerDTO).build();
    }

    @Override
    public ApiResponse getAllPrinter() {
        ApiResponse apiResponse = new ApiResponse();
        List<Printer> listPrinter = printerRepository.findAll();
        if (listPrinter.isEmpty()) {
            return apiResponse.builder().message("Finding success").success(true).data("None data").build();
        }

        List<PrinterDTO> listPrintDto = listPrinter.stream().map(e -> new PrinterDTO(e)).toList();
        return apiResponse.builder().message("Finding success").success(true).data(listPrintDto).build();
    }
}
