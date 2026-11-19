package org.example.backend.exception;

import org.example.backend.common.Constants;

// 业务异常，全局异常处理器会捕获
public class BusinessException extends RuntimeException {

    private final Integer code;

    public BusinessException(String message) {
        super(message);
        this.code = Constants.CODE_BAD_REQUEST;
    }

    public BusinessException(Integer code, String message) {
        super(message);
        this.code = code;
    }

    public Integer getCode() {
        return code;
    }
}

