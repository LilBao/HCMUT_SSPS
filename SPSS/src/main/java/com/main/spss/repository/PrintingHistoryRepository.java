package com.main.spss.repository;

import com.main.spss.dto.PrintingHistoryDTO;
import com.main.spss.entity.PrintJob;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PrintingHistoryRepository extends JpaRepository<PrintJob, Long> {
}