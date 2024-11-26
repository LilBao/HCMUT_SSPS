package com.main.spss.api.system;

import com.main.spss.dto.PrintingConfigurationDTO;
import com.main.spss.payload.response.ApiResponse;
import com.main.spss.security.CurrentUser;
import com.main.spss.security.UserPrincipal;
import com.main.spss.service.PrintingConfigurationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/system/configuration")
@RequiredArgsConstructor
public class PrintingConfiguration {
    private final PrintingConfigurationService printingConfigurationService;
    @GetMapping("/latest")
    public ResponseEntity<ApiResponse> getLatestConfig(){
        return ResponseEntity.ok(printingConfigurationService.findLatestConfig());
    }

    @PostMapping()
    public ResponseEntity<ApiResponse> saveConfig(@CurrentUser UserPrincipal userPrincipal, @RequestBody PrintingConfigurationDTO printingConfigurationDTO){
        return ResponseEntity.ok(printingConfigurationService.updateConfig(userPrincipal, printingConfigurationDTO));
    }

    @PutMapping()
    public ResponseEntity<ApiResponse> updateConfig(@CurrentUser UserPrincipal userPrincipal, @RequestBody PrintingConfigurationDTO printingConfigurationDTO){
        return ResponseEntity.ok(printingConfigurationService.updateConfig(userPrincipal, printingConfigurationDTO));
    }
}
