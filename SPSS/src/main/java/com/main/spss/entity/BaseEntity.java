package com.main.spss.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.util.Date;

@Setter
@Getter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public class BaseEntity {
    @Column(name = "created_at")
    @Temporal(TemporalType.TIMESTAMP)
    @CreatedDate
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private Date createdAt;

    @Column(name = "created_by")
    @CreatedBy
    private String createdBy;

    @Column(name = "modified_at")
    @LastModifiedDate
    @Temporal(TemporalType.TIMESTAMP)
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private Date modifiedAt;

    @Column(name = "modified_by")
    @LastModifiedBy
    private String modifiedBy;
}
