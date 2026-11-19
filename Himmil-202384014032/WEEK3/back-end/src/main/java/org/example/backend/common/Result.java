package org.example.backend.common;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// 统一响应封装
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Result<T> {

    private Integer code;
    private String message;
    private T data;

    public static <T> Result<T> success() {
        return new Result<>(Constants.CODE_SUCCESS, Constants.MSG_SUCCESS, null);
    }

    public static <T> Result<T> success(T data) {
        return new Result<>(Constants.CODE_SUCCESS, Constants.MSG_SUCCESS, data);
    }

    public static <T> Result<T> success(String message, T data) {
        return new Result<>(Constants.CODE_SUCCESS, message, data);
    }

    public static <T> Result<T> error(Integer code, String message) {
        return new Result<>(code, message, null);
    }

    public static <T> Result<T> error(String message) {
        return new Result<>(Constants.CODE_SERVER_ERROR, message, null);
    }

    public static <T> Result<T> badRequest(String message) {
        return new Result<>(Constants.CODE_BAD_REQUEST, message, null);
    }

    public static <T> Result<T> unauthorized(String message) {
        return new Result<>(Constants.CODE_UNAUTHORIZED, message, null);
    }

    public static <T> Result<T> forbidden(String message) {
        return new Result<>(Constants.CODE_FORBIDDEN, message, null);
    }
}

