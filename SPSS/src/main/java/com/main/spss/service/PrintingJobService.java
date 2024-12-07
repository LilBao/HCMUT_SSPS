package com.main.spss.service;

import com.main.spss.dto.PrinterDTO;
import com.main.spss.dto.PrintingPropertiesDTO;
import com.main.spss.payload.request.PrintRequest;
import com.main.spss.security.UserPrincipal;
import com.main.spss.payload.response.ApiResponse;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.List;

public interface PrintingJobService {
    ApiResponse addRequest(UserPrincipal userPrincipal, PrintRequest request, MultipartFile[] files);
}
