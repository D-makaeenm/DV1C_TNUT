package com.Zero.exception;

public enum ErrorCode {
    USER_EXISTED(1002, "User existed"),
    UNCATEGORIZED_EXCEPTION(9999, "asda"),
    USERNAME_INVALID(1003, "Username is invalid"),
    PASSWORD_INVALID(1004, "Password is invalid"),
    INVALID_KEY(1001, "Invalid key"),
    ;

    ErrorCode(int code, String message) {
        this.code = code;
        this.message = message;
    }

    private int code;
    private String message;

    public int getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }
}
