package com.main.spss.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;

import java.util.Date;

@Entity
@Table(name = "tbl_spss_transaction")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Transaction extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "transaction_id")
    private Long transactionId;

    @Column(name = "transaction_date")
    @Temporal(TemporalType.TIMESTAMP)
    @CreatedDate
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private Date transactionDate;

    @Column(name = "page_amount")
    private Integer pageAmount;

    @Column(name = "transaction_type")
    private String transactionType;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
