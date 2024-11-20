package com.main.spss.mapper;

import com.main.spss.dto.SystemUserDTO;
import com.main.spss.entity.User;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class SystemUserMapper {
    private final ModelMapper modelMapper;

    public SystemUserDTO toSystemUserDto(User user) {
        if (user == null) {
            return null;
        }
        SystemUserDTO dto = modelMapper.map(user, SystemUserDTO.class);
        return dto;
    }
}
