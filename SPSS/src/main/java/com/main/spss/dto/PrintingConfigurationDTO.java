package com.main.spss.dto;

import com.main.spss.entity.PrintingConfiguration;
import lombok.Getter;
import lombok.Setter;
import org.modelmapper.ModelMapper;

import java.util.Date;

@Setter
@Getter
public class PrintingConfigurationDTO {
    private Long id;

    private String allowedFileTypes;

    private int maxPageCount;

    private double costPerPage;

    private Date dateProvide;

    public PrintingConfigurationDTO(PrintingConfiguration printingConfiguration) {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.map(printingConfiguration, this);
    }
}
