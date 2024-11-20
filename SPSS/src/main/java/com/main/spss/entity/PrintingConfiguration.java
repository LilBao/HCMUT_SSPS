package com.main.spss.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name = "tbl_configurations")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PrintingConfiguration extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "allowed_file_types")
    private String allowedFileTypes;

    @Column(name = "max_page_count")
    private int maxPageCount;

    @Column(name = "cost_per_page")
    private double costPerPage;

    @Column(name = "date_provide")
    @Temporal(TemporalType.TIMESTAMP)
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private Date dateProvide;
}
