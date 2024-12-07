package com.main.spss.utils;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.List;

public interface FileService {
    String getFileExtension(File file);

    List<File> convertMultipart(MultipartFile[] multipartFiles);

}
