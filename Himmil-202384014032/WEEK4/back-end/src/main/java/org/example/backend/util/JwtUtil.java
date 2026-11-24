package org.example.backend.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.example.backend.common.Constants;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;

// JWT工具类，生成、解析、校验令牌
public class JwtUtil {

    private JwtUtil() {}

    private static final SecretKey shanxiligong_SECRET_KEY =
            Keys.hmacShaKeyFor(Constants.JWT_SECRET.getBytes(StandardCharsets.UTF_8));

    // 生成令牌
    public static String generateToken(Long userId, String username, Integer role) {
        Date now = new Date();
        Date expiration = new Date(now.getTime() + Constants.JWT_EXPIRATION);

        return Jwts.builder()
                .subject(String.valueOf(userId))
                .claim("userId", userId)
                .claim("username", username)
                .claim("role", role)
                .issuedAt(now)
                .expiration(expiration)
                .signWith(shanxiligong_SECRET_KEY)
                .compact();
    }

    // 解析令牌
    public static Claims parseToken(String token) {
        try {
            return Jwts.parser()
                    .verifyWith(shanxiligong_SECRET_KEY)
                    .build()
                    .parseSignedClaims(token)
                    .getPayload();
        } catch (Exception e) {
            return null;
        }
    }

    // 校验令牌是否有效
    public static boolean validateToken(String token) {
        return parseToken(token) != null;
    }

    // 取用户ID
    public static Long getUserId(String token) {
        Claims claims = parseToken(token);
        return claims != null ? claims.get("userId", Long.class) : null;
    }

    // 取用户名
    public static String getUsername(String token) {
        Claims claims = parseToken(token);
        return claims != null ? claims.get("username", String.class) : null;
    }

    // 取角色
    public static Integer getRole(String token) {
        Claims claims = parseToken(token);
        return claims != null ? claims.get("role", Integer.class) : null;
    }
}

