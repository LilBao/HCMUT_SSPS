package com.main.spss.payload.request;

import com.main.spss.dto.PrinterDTO;
import com.main.spss.dto.PrintingPropertiesDTO;
import com.main.spss.enums.EPrintingStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.File;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PrintRequest {
    private String email;

    private PrinterDTO printerDTO;

    private List<File> files;

    private PrintingPropertiesDTO printParameters;

    private EPrintingStatus status = EPrintingStatus.PENDING;
}
