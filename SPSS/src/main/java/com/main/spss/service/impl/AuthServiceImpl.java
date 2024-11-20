package com.main.spss.service.impl;

import com.main.spss.entity.User;
import com.main.spss.repository.UserRepository;
import com.main.spss.security.JwtUtilities;
import com.main.spss.security.UserPrincipal;
import com.main.spss.service.AuthService;
import com.main.spss.utils.ApiResponseCode;
import com.main.spss.utils.CookieUtils;
import com.main.spss.mapper.SystemUserMapper;
import com.main.spss.payload.request.LoginRequest;
import com.main.spss.payload.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final CookieUtils cookieUtils;

    private final PasswordEncoder passwordEncoder;

    private final UserRepository userRepository;

    private final SystemUserMapper systemUserMapper;

    private final AuthenticationManager authenticationManager;

    private final JwtUtilities jwtUtilities;

    @Override
    public ApiResponse login(LoginRequest loginRequest) {
        User user = userRepository.findUserByEmail(loginRequest.getEmail()).orElse(null);
        ApiResponse apiResponse = checkSystemUserByEmail(user);
        if (apiResponse != null) {
            return apiResponse;
        }

        if (!passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
            return apiResponse.builder()
                    .message("Password is incorrect")
                    .success(false)
                    .errorCode( ApiResponseCode.AUTHENTICATION_PASSWORD_INCORRECT)
                    .build();
        }

        Authentication authentication;
        try {
            authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword())
            );
        } catch (Exception e) {
            return ApiResponse.builder()
                    .message("Authentication failed: " + e.getMessage())
                    .success(false)
                    .errorCode(ApiResponseCode.AUTHENTICATION_ERROR)
                    .build();
        }

        SecurityContextHolder.getContext().setAuthentication(authentication);
        UserPrincipal userDetail = (UserPrincipal) authentication.getPrincipal();
        String accessToken = jwtUtilities.generateToken(userDetail);
        String refreshToken = jwtUtilities.generateToken(userDetail);
        cookieUtils.addRequestAuthenticationToken(accessToken,  refreshToken);
        user.setToken(refreshToken);
        userRepository.save(user);
        return ApiResponse.builder()
                .message("Login success")
                .success(true)
                .data(systemUserMapper.toSystemUserDto(user))
                .build();
    }

    public ApiResponse logout() {
        ApiResponse apiResponse = new ApiResponse();
        cookieUtils.clearCookies();
        return apiResponse.builder()
                .message("Logout success")
                .success(true)
                .build();
    }

    private ApiResponse checkSystemUserByEmail(User user) {
        ApiResponse apiResponse = new ApiResponse();
        if (user == null) {
            return  apiResponse.builder()
                    .message("Email is not found")
                    .success(false)
                    .errorCode( ApiResponseCode.AUTHENTICATION_EMAIL_NOT_FOUND)
                    .build();
        }
        if (!user.getIsEnabled()) {
            return  apiResponse.builder()
                    .message("Account is disabled")
                    .success(false)
                    .errorCode( ApiResponseCode.AUTHENTICATION_ACCOUNT_DISABLED)
                    .build();
        }
        return null;
    }
}
