package com.main.spss.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import org.springframework.data.annotation.CreatedDate;

import java.util.Date;

@Entity
@Table(name = "tbl_report")
public class Report extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reportId;

    @Temporal(TemporalType.TIMESTAMP)
    @CreatedDate
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private Date reportDate;
    private String reportType;
    private String content;
}
