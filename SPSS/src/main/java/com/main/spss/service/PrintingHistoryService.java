package com.main.spss.service;

import com.main.spss.dto.PrintingHistoryDTO;
import com.main.spss.entity.PrintJob;
import com.main.spss.repository.PrintingHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class PrintingHistoryService {

    @Autowired
    private PrintingHistoryRepository printingHistoryRepository;

    private static final Map<String, Double> PRICE_PER_PAGE = new HashMap<>();

    static {
        PRICE_PER_PAGE.put("A3", 1000.0);
        PRICE_PER_PAGE.put("A4", 300.0);
        PRICE_PER_PAGE.put("A5", 200.0);
    }

    public List<PrintingHistoryDTO> getAllPrintingHistories() {
        List<PrintJob> printJobs = printingHistoryRepository.findAll();
        return printJobs.stream()
                .map(this::convertToDTO)
                .toList();
    }

    private PrintingHistoryDTO convertToDTO(PrintJob printJob) {
        double pricePerPage = PRICE_PER_PAGE.getOrDefault(printJob.getPageSize(), 0.0);
        double price = pricePerPage * printJob.getNumberOfPages() * printJob.getNumberOfCopies();
        PrintingHistoryDTO dto = new PrintingHistoryDTO();
        dto.setJobId(printJob.getJobId());
        dto.setFileName(printJob.getFileName());
        dto.setPrinterId(printJob.getPrinter().getPrinterId());
        dto.setTimestamp(printJob.getStartTime());
        dto.setNumberOfCopies(printJob.getNumberOfCopies());
        dto.setPrice(price);
        dto.setStatus(printJob.getStatus());
        return dto;
    }
}