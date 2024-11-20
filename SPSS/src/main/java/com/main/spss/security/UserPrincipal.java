package com.main.spss.security;

import com.main.spss.entity.Role;
import com.main.spss.entity.User;
import com.main.spss.enums.ERole;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class UserPrincipal implements UserDetails {
    private String id;
    private String email;

    private String password;

    private boolean isEnabled;

    private Collection<? extends GrantedAuthority> authorities;

    public UserPrincipal(User user) {
        this.email = user.getEmail();
        this.password = user.getPassword();
        this.isEnabled = user.getIsEnabled();
        this.authorities = user.getRoles().stream().
                map(role -> new SimpleGrantedAuthority(role.getName().name()))
                .collect(Collectors.toList());
    }

    public UserPrincipal(String id, String email, List<String> authorities, Boolean isEnabled) {
        this.id = id;
        this.email = email;
        this.password = null;
        this.isEnabled = isEnabled;
        this.authorities = authorities.stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList());
    }

    public UserPrincipal(String id, String email, String password, Boolean isEnabled, Collection<? extends GrantedAuthority> authorities) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.isEnabled = isEnabled;
        this.authorities = authorities;
    }


    public static UserPrincipal create(User user) {
        List<GrantedAuthority> authorities = user.getRoles().stream().map(role ->
                new SimpleGrantedAuthority(role.getName().name())
        ).collect(Collectors.toList());
        return new UserPrincipal(
                user.getId(),
                user.getEmail(),
                user.getPassword(),
                user.getIsEnabled(),
                authorities
        );
    }

    public User toUser() {
        User user = new User();
        user.setId(this.getId());
        user.setRoles(this.getAuthorities().stream().map(authority -> {
            Role role = new Role();
            role.setName(ERole.valueOf(authority.getAuthority()));
            return role;
        }).collect(Collectors.toList()));
        user.setIsEnabled(this.isEnabled);
        return user;
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return isEnabled;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
