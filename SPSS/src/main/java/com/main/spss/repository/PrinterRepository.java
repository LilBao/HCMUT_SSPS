package com.main.spss.repository;

import com.main.spss.entity.Printer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PrinterRepository extends JpaRepository<Printer, Long> {
}
