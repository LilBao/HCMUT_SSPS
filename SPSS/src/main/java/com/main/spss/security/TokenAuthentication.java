package com.main.spss.security;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

public class TokenAuthentication implements Authentication {
    private final UserPrincipal principal;
    private boolean authenticated;

    public TokenAuthentication(UserPrincipal principal) {
        this.principal = principal;
        this.authenticated = principal != null
                && principal.isEnabled()
                && principal.isAccountNonExpired()
                && principal.isAccountNonLocked()
                && principal.getId() != null;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return principal.getAuthorities();
    }

    @Override
    public Object getCredentials() {
        return null;
    }

    @Override
    public Object getDetails() {
        return null;
    }

    @Override
    public Object getPrincipal() {
        return principal;
    }

    @Override
    public boolean isAuthenticated() {
        return authenticated;
    }

    @Override
    public void setAuthenticated(boolean isAuthenticated) throws IllegalArgumentException {
        this.authenticated = isAuthenticated;
    }

    @Override
    public String getName() {
        return principal.getUsername();
    }
}
