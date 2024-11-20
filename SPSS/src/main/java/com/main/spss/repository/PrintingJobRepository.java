package com.main.spss.repository;

import com.main.spss.entity.PrintJob;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PrintingJobRepository extends JpaRepository<PrintJob, Long> {
}
