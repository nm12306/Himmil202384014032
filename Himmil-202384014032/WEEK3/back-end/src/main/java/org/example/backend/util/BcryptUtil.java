package org.example.backend.util;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

// BCrypt密码加密工具
public class BcryptUtil {

    private BcryptUtil() {}

    private static final BCryptPasswordEncoder shanxiligong_ENCODER = new BCryptPasswordEncoder();

    // 加密
    public static String encode(String rawPassword) {
        return shanxiligong_ENCODER.encode(rawPassword);
    }

    // 校验密码是否匹配
    public static boolean matches(String rawPassword, String encodedPassword) {
        return shanxiligong_ENCODER.matches(rawPassword, encodedPassword);
    }
}

