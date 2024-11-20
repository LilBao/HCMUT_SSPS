package com.main.spss.utils.impl;

import com.main.spss.security.JwtUtilities;
import com.main.spss.utils.CookieUtils;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.util.SerializationUtils;

import java.util.Arrays;
import java.util.Base64;
import java.util.Optional;
@Component
@RequiredArgsConstructor
public class CookieUtilsImpl implements CookieUtils {

    private final HttpServletRequest request;

    private final HttpServletResponse response;

    private final JwtUtilities jwtUtilities;
    public static String serialize(Object object) {
        return Base64.getUrlEncoder()
                .encodeToString(SerializationUtils.serialize(object));
    }

    public static <T> T deserialize(Cookie cookie, Class<T> cls) {
        return cls.cast(SerializationUtils.deserialize(
                Base64.getUrlDecoder().decode(cookie.getValue())));
    }

    public Optional<Cookie> getCookie(String name) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals(name)) {
                    return Optional.of(cookie);
                }
            }
        }
        return Optional.empty();
    }

    public void addCookie(String name, String value, int maxAge) {
        Cookie cookie = new Cookie(name, value);
        cookie.setPath("/");
        cookie.setHttpOnly(true);
        cookie.setMaxAge(maxAge);
        response.addCookie(cookie);
    }

    public void deleteCookie(String name) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals(name)) {
                    cookie.setValue("");
                    cookie.setPath("/");
                    cookie.setMaxAge(0);
                    response.addCookie(cookie);
                }
            }
        }
    }

    public void clearCookies() {
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            Arrays.stream(cookies)
                    .forEach(cookie -> {
                        cookie.setValue("");
                        cookie.setPath("/");
                        cookie.setMaxAge(0);
                        response.addCookie(cookie);
                    });
        }
    }

    public void addRequestAuthenticationToken(String accessToken, String refreshToken) {
        addCookie("access_token", accessToken, (int) (36000000));
        addCookie("token", accessToken, (int) (36000000));
        addCookie("refresh_token", refreshToken, (int) (36000000));
    }
}
