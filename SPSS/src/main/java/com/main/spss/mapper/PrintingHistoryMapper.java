package com.main.spss.mapper;

import com.main.spss.dto.PrintingHistoryDTO;
import com.main.spss.entity.PrintJob;
import com.main.spss.repository.PrintingHistoryRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.stereotype.Component;
import org.modelmapper.ModelMapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
@RequiredArgsConstructor
public class PrintingHistoryMapper {
    private final ModelMapper modelMapper;

    public PrintingHistoryDTO toPrintingHistoryDto(PrintJob printJob) {
        if (printJob == null) {
            return null;
        }
        PrintingHistoryDTO dto = modelMapper.map(printJob, PrintingHistoryDTO.class);
        return dto;
    }
}