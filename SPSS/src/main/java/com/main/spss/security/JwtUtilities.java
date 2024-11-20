package com.main.spss.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.SignatureException;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import java.time.Duration;
import java.time.Instant;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.function.Function;

@Component
@Slf4j
public class JwtUtilities {
    @Value("${jwt.secret}")
    private String secretKey;

    @Value("${jwt.expiration}")
    private Long expiration;


    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    public Claims extractAllClaims(String token) {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody();
    }

    public Boolean validateToken(String token, UserDetails userDetails) {
        final String email = extractUsername(token);
        return (email.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }
    public Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }


    public String generateToken(UserPrincipal userPrincipal) {
        return Jwts.builder()
                .setSubject(userPrincipal.getUsername())
                .claim("role", userPrincipal.getAuthorities())
                .claim("id", userPrincipal.getId())
                .claim("isEnabled", userPrincipal.isEnabled())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(Date.from(Instant.now().plus(Duration.ofMillis(expiration))))
                .signWith(SignatureAlgorithm.HS512, secretKey)
                .compact();
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
            return true;
        } catch (SignatureException e) {
            log.info("Invalid JWT signature.");
            log.trace("Invalid JWT signature trace: {}", e);
        } catch (MalformedJwtException e) {
            log.info("Invalid JWT token.");
            log.trace("Invalid JWT token trace: {}", e);
        } catch (ExpiredJwtException e) {
            log.info("Expired JWT token.");
            log.trace("Expired JWT token trace: {}", e);
        } catch (UnsupportedJwtException e) {
            log.info("Unsupported JWT token.");
            log.trace("Unsupported JWT token trace: {}", e);
        } catch (IllegalArgumentException e) {
            log.info("JWT token compact of handler are invalid.");
            log.trace("JWT token compact of handler are invalid trace: {}", e);
        }
        return false;
    }

    public String getToken (HttpServletRequest httpServletRequest) {
        final String bearerToken = httpServletRequest.getHeader("Authorization");
        if(StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7,bearerToken.length());
        }
        return null;
    }

    public UserPrincipal extractToken(String authToken) throws ExpiredJwtException {
        try {
            Claims claims = Jwts.parser()
                    .setSigningKey(secretKey)
                    .parseClaimsJws(authToken)
                    .getBody();
            // Extract user ID from the token subject
            String email = claims.getSubject();
            Boolean isEnabled = claims.get("isEnabled", Boolean.class);
            String id = claims.get("id", String.class);
            // Extract authorities/roles from the "authorities" claim
            List<String> authorities = ((List<?>) claims.get("role")).stream()
                    .map(role -> {
                        if (role instanceof LinkedHashMap) {
                            return (String) ((LinkedHashMap<?, ?>) role).get("authority");
                        } else if (role instanceof String) {
                            return (String) role;
                        }
                        return null;
                    })
                    .filter(role -> role != null)
                    .toList();

            if (email == null || authorities.isEmpty()) {
                return null;
            }
            return new UserPrincipal(id, email, authorities, isEnabled);
        } catch (ExpiredJwtException e) {
            throw e;
        } catch (Exception e) {
            return null;
        }
    }

    public String getEmailByRequest(HttpServletRequest request) {
        try {
            String jwt = getToken(request);
            if (StringUtils.hasText(jwt) && validateToken(jwt)) {
                String email = extractUsername(jwt);
                return email;
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return null;

    }

}
