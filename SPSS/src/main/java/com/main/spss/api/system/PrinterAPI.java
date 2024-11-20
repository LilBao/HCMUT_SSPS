package com.main.spss.api.system;

import com.main.spss.dto.PrinterDTO;
import com.main.spss.security.CurrentUser;
import com.main.spss.security.UserPrincipal;
import com.main.spss.service.PrinterService;
import com.main.spss.payload.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/system/printer")
@RequiredArgsConstructor
public class PrinterAPI {
    private final PrinterService printerService;
    @GetMapping("/{printer_id}")
    public ResponseEntity<ApiResponse> findPrinterById(@PathVariable(name = "printer_id") Long printId) {
        return ResponseEntity.ok(printerService.getPrinterById(printId));
    }

    @GetMapping("/all-printer")
    public ResponseEntity<ApiResponse> findAllPrinter() {
        return ResponseEntity.ok(printerService.getAllPrinter());
    }

    @PostMapping()
    public ResponseEntity<ApiResponse> createPrinter(@CurrentUser UserPrincipal userPrincipal, @RequestBody PrinterDTO printerDTO){
        return ResponseEntity.status(HttpStatus.CREATED).body(printerService.savePrinter(printerDTO, userPrincipal));
    }

    @PutMapping()
    public ResponseEntity<ApiResponse> updatePrinter(@CurrentUser UserPrincipal userPrincipal, @RequestBody PrinterDTO printerDTO){
        return ResponseEntity.status(HttpStatus.CREATED).body(printerService.savePrinter(printerDTO, userPrincipal));
    }

    @DeleteMapping("/{printer_id}")
    public ResponseEntity<ApiResponse> deletePrinter(@PathVariable(name = "printer_id") Long printId) {
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(printerService.deletePrinter(printId));
    }
}
