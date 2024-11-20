package com.main.spss.service;

import com.main.spss.dto.PrinterDTO;
import com.main.spss.security.UserPrincipal;
import com.main.spss.payload.response.ApiResponse;

public interface PrinterService {
    ApiResponse getPrinterById(Long printerId);
    ApiResponse getAllPrinter();
    ApiResponse savePrinter(PrinterDTO printerDTO, UserPrincipal userPrincipal);
    ApiResponse deletePrinter(Long printerId);
}
