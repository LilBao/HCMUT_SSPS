package com.main.spss.service.impl;

import com.main.spss.dto.PrintingConfigurationDTO;
import com.main.spss.entity.PrintingConfiguration;
import com.main.spss.entity.User;
import com.main.spss.payload.response.ApiResponse;
import com.main.spss.repository.PrintingConfigurationRepository;
import com.main.spss.repository.UserRepository;
import com.main.spss.security.UserPrincipal;
import com.main.spss.service.PrintingConfigurationService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PrintingConfigurationServiceImpl implements PrintingConfigurationService {

    private final PrintingConfigurationRepository printingConfigurationRepository;

    private final UserRepository userRepository;

    private final ModelMapper modelMapper;

    @Override
    public ApiResponse findLatestConfig() {
        PrintingConfiguration printingConfiguration = printingConfigurationRepository.findTopByCreatedAtDesc().get();
        if (printingConfiguration == null) {
            return new ApiResponse().builder()
                    .success(true)
                    .data(null)
                    .message("Not found data").build();
        }

        PrintingConfigurationDTO configurationDTO = new PrintingConfigurationDTO(printingConfiguration);
        return  new ApiResponse().builder()
                .success(true)
                .data(configurationDTO)
                .message("Success").build();
    }

    @Override
    @Transactional
    public ApiResponse updateConfig(UserPrincipal userPrincipal, PrintingConfigurationDTO configurationDTO) {
        User user = userPrincipal.toUser();
        PrintingConfiguration printingConfiguration = new PrintingConfiguration();
        modelMapper.map(configurationDTO, printingConfiguration);
        printingConfiguration.setModifiedBy(user.getId());
        printingConfigurationRepository.save(printingConfiguration);
        return  new ApiResponse().builder()
                .success(true)
                .data(configurationDTO)
                .message("Success").build();
    }

    @Scheduled(cron = "0 0 0 1 1,5,9 *", zone = "Asia/Ho_Chi_Minh")
    private ApiResponse providePages() {
        List<User> listStudent = userRepository.findAllByIsEnabledAndRolesContainingIgnoreCase(true, "ROLE_STUDENT");
        PrintingConfiguration printingConfiguration = printingConfigurationRepository.findTopByCreatedAtDesc().get();
        if (listStudent.isEmpty()) {
            new ApiResponse().builder()
                    .success(true)
                    .message("List student is empty").build();
        }

        if (printingConfiguration == null) {
            new ApiResponse().builder()
                    .success(false)
                    .errorCode(3000)
                    .message("Success").build();
        }

        listStudent.stream().forEach(e -> {
                    e.setPageBalance(printingConfiguration.getMaxPageCount());
                    userRepository.save(e);
                }
        );

        return new ApiResponse().builder()
                .success(true)
                .message("Success").build();
    }
}
