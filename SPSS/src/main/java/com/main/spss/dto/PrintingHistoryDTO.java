package com.main.spss.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PrintingHistoryDTO {
    private Long jobId;
    private String fileName;
    private Long printerId;
    private Date timestamp;
    private int numberOfCopies;
    private double price;
    private String status;
}