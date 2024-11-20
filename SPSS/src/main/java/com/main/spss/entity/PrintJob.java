package com.main.spss.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name = "tbl_printing_logs")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PrintJob extends BaseEntity{
    @Id
    @Column(name = "job_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long jobId;

    @Column(name = "file_name")
    private String fileName;

    @Column(name = "start_time")
    @Temporal(TemporalType.TIMESTAMP)
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private Date startTime;

    @Column(name = "end_time")
    @Temporal(TemporalType.TIMESTAMP)
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private Date endTime;

    @Column(name = "page_sizes")
    private String pageSize;

    @Column(name = "number_of_pages")
    private Integer numberOfPages;

    @Column(name = "is_one_sided")
    private Boolean isOneSided;

    @Column(name = "number_of_copies")
    private Integer numberOfCopies;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "printer_id")
    private Printer printer;
}
