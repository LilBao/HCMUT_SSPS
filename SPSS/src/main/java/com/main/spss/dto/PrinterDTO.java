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

    @JsonCreator
    public PrinterDTO(
            @JsonProperty("printerId") Long printerId,
            @JsonProperty("brand") String brand,
            @JsonProperty("model") String model,
            @JsonProperty("description") String description,
            @JsonProperty("location") Location location,
            @JsonProperty("ipAddress") String ipAddress,
            @JsonProperty("status") Boolean status) {
        this.printerId = printerId;
        this.brand = brand;
        this.model = model;
        this.description = description;
        this.location = location;
        this.ipAddress = ipAddress;
        this.status = status;
    }

    public PrinterDTO(Printer printer) {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.map(printer, this);
    }
}
