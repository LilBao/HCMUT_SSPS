package com.main.spss.utils.impl;

import com.main.spss.utils.EmailService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;

@Service
public class EmailServiceImpl implements EmailService {
    private static final Logger logger = LoggerFactory.getLogger(EmailServiceImpl.class);

    @Autowired
    JavaMailSender mailSender;

    @Autowired
    TemplateEngine templateEngine;

    @Async("taskExecutor")
    public void sendTemplateEmail(String recipientEmail, String subject, String path) {
        try {
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
            helper.setTo(recipientEmail);
            // Load HTML content from Thymeleaf template
            String htmlContent = templateEngine.process(path, null); // Use context variables if needed
            // Set the HTML content of the email
            helper.setText(htmlContent, true);
            mailSender.send(mimeMessage);
        } catch (MessagingException e) {
            logger.error("Failed to send template email: " + e.getMessage());
        }
    }

    @Async("taskExecutor")
    public void sendEmail(String recipientEmail, String subject, String content) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(recipientEmail);
            message.setSubject(subject);
            message.setText(content);
            mailSender.send(message);
        } catch (MailException e) {
            logger.error("Failed to send email: " + e.getMessage());
        }
    }
}
