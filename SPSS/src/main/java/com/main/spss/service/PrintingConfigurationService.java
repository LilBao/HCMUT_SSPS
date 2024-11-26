package com.main.spss.service;

import com.main.spss.dto.PrintingConfigurationDTO;
import com.main.spss.payload.response.ApiResponse;
import com.main.spss.security.UserPrincipal;

public interface PrintingConfigurationService {
    ApiResponse findLatestConfig();
    ApiResponse updateConfig(UserPrincipal userPrincipal, PrintingConfigurationDTO configurationDTO);
}
