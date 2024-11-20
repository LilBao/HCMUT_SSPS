package com.main.spss.entity;

import com.main.spss.embedded.Location;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "tbl_printer")
public class Printer extends BaseEntity{
    @Id
    @Column(name = "printer_id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long printerId;

    private String brand;

    private String model;

    private String description;

    @Embedded
    private Location location;

    @Column(name = "ip_address")
    private String ipAddress;

    @Column(name = "status")
    private Boolean status;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "printer")
    private List<PrintJob> printJobs;
}
