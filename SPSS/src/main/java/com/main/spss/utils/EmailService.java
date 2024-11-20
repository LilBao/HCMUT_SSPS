package com.main.spss.utils;

public interface EmailService {
    public void sendTemplateEmail(String recipientEmail, String subject, String path);

    public void sendEmail(String recipientEmail, String subject, String content);
}
