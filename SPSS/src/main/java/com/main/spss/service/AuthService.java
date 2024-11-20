package com.main.spss.service;

import com.main.spss.payload.request.LoginRequest;
import com.main.spss.payload.response.ApiResponse;

public interface AuthService {
    ApiResponse login(LoginRequest loginRequest);

    ApiResponse logout();
}
