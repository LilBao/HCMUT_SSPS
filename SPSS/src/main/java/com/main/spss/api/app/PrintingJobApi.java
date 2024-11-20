package com.main.spss.api.app;

import com.main.spss.payload.request.PrintRequest;
import com.main.spss.payload.response.ApiResponse;
import com.main.spss.security.CurrentUser;
import com.main.spss.security.UserPrincipal;
import com.main.spss.service.PrintingJobService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/spss/printing")
@RequiredArgsConstructor
public class PrintingJobApi {

    private final PrintingJobService printingJobService;
    @PostMapping(consumes = {"multipart/form-data"})
    public ResponseEntity<ApiResponse> requestPrint(@CurrentUser UserPrincipal userPrincipal,
                                                    @ModelAttribute PrintRequest printRequest) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(printingJobService.addRequest(userPrincipal, printRequest));
    }
}
