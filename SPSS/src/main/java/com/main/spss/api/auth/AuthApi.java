package com.main.spss.api.auth;

import com.main.spss.service.AuthService;
import com.main.spss.payload.request.LoginRequest;
import com.main.spss.payload.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class AuthApi {
    private final AuthService authService;
    @PostMapping("/api/login")
    public ResponseEntity<ApiResponse> login(@RequestBody LoginRequest loginRequest) {
        return ResponseEntity.ok(authService.login(loginRequest));
    }

    @GetMapping("/api/logout")
    public ResponseEntity<ApiResponse> test() {
        return ResponseEntity.ok(authService.logout());
    }
}
