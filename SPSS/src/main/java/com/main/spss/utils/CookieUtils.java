package com.main.spss.utils;

public interface CookieUtils {

    public void addCookie(String name, String value, int maxAge);

    public void deleteCookie(String name);

    public void clearCookies();

    public void addRequestAuthenticationToken(String accessToken, String refreshToken);
}
