package com.main.spss.api.app;

import com.main.spss.dto.PrintingHistoryDTO;
import com.main.spss.service.PrintingHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/printing-history/all")
public class PrintingHistoryController {

    @Autowired
    private PrintingHistoryService printingHistoryService;

    @GetMapping
    public List<PrintingHistoryDTO> getAllPrintingHistories() {
        return printingHistoryService.getAllPrintingHistories();
    }
}