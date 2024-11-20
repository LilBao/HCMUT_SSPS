package com.main.spss.payload.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@NoArgsConstructor
@SuperBuilder
public class ApiResponse {
    private String message;
    private Object data;
    private int errorCode = -1;
    private boolean success = true;
}
