package com.main.spss.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@Slf4j
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtUtilities jwtUtilities;

    @Override
    protected void doFilterInternal(@NonNull HttpServletRequest request,
                                    @NonNull HttpServletResponse response,
                                    @NonNull FilterChain filterChain) throws ServletException, IOException {
        try {
            String jwt = jwtUtilities.getToken(request);
            if(StringUtils.hasText(jwt) && jwtUtilities.validateToken(jwt)) {
                UserPrincipal principal = jwtUtilities.extractToken(jwt);
                TokenAuthentication authentication = new TokenAuthentication(principal);
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        } catch (Exception e) {

        }
        filterChain.doFilter(request, response);
    }
}
