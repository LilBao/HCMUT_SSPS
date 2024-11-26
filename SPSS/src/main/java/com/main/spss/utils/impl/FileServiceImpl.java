package com.main.spss.utils.impl;

import com.main.spss.utils.FileService;
import org.springframework.stereotype.Component;

import java.io.File;

@Component
public class FileServiceImpl implements FileService {
    @Override
    public String getFileExtension(File file) {
        String fileName = file.getName();
        int dotIndex = fileName.lastIndexOf('.');
        if (dotIndex > 0 && dotIndex < fileName.length() - 1) {
            return fileName.substring(dotIndex + 1).toLowerCase();
        }
        return "unknown";
    }
}
