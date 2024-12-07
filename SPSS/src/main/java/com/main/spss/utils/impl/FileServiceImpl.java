package com.main.spss.utils.impl;

import com.main.spss.utils.FileService;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

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

    @Override
    public List<File> convertMultipart(MultipartFile[] multipartFiles) {
        List<File> processedFiles = Arrays.stream(multipartFiles)
                .map(file -> {
                    try {
                        String fileName = file.getOriginalFilename();
                        byte[] fileData = file.getBytes();
                        File tempFile = new File(System.getProperty("java.io.tmpdir"), fileName);
                        try (FileOutputStream fos = new FileOutputStream(tempFile)) {
                            fos.write(fileData);
                        }
                        return tempFile;
                    } catch (IOException e) {
                        throw new RuntimeException("Error processing file: " + file.getOriginalFilename(), e);
                    }
                }).collect(Collectors.toList());
        return processedFiles;
    }
}
