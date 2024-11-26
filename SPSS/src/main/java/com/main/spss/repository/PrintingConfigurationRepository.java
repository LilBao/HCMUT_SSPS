package com.main.spss.repository;

import com.main.spss.entity.PrintingConfiguration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PrintingConfigurationRepository extends JpaRepository<PrintingConfiguration, Long> {
    Optional<PrintingConfiguration> findTopByCreatedAtDesc();
}
