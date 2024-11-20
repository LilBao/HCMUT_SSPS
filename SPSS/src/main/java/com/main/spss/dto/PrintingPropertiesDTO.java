package com.main.spss.dto;

import com.main.spss.enums.EPageSize;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class PrintingPropertiesDTO {
    private EPageSize pageSize;

    private Boolean isDuplex;

    private String pages;

    private Integer numberOfCopies;

    private Integer orientation;

    private Boolean color;
}
