package com.main.spss.dto;

import com.main.spss.enums.ERole;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class SystemUserDTO {
    private String id;

    private String email;

    private String name;

    private ERole role;

    private Double accountBalance;

    private String token;
}
