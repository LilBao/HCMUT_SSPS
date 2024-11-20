package com.main.spss.dto;

import com.main.spss.embedded.Location;
import com.main.spss.entity.Printer;
import jakarta.persistence.Embedded;
import lombok.Getter;
import lombok.Setter;
import org.modelmapper.ModelMapper;

@Setter
@Getter
public class PrinterDTO {
    private Long printerId;

    private String brand;

    private String model;

    private String description;

    @Embedded
    private Location location;

    private String ipAddress;

    private Boolean status;

    public PrinterDTO(Printer printer) {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.map(printer, this);
    }
}
