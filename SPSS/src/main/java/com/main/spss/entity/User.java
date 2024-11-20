package com.main.spss.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "tbl_spss_user")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User extends BaseEntity{
    @Id
    @Column(name = "user_id")
    private String id;

    private String email;

    private String password;

    private String name;

    @Column(name = "is_enabled")
    private Boolean isEnabled = true;

    @Column(name = "expire_code_at")
    private Date expiredCodeAt;

    @Column(name = "account_balance")
    private Double accountBalance;

    @Column(length = 500)
    private String token;

    @Column(name = "page_balance")
    private String pageBalance;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "user")
    private List<PrintJob> printJobs;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "user")
    private List<Transaction> transaction;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "tbl_user_role",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private List<Role> roles;

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", name='" + name + '\'' +
                ", isEnabled=" + isEnabled +
                ", expiredCodeAt=" + expiredCodeAt +
                ", accountBalance=" + accountBalance +
                ", token='" + token + '\'' +
                ", pageBalance='" + pageBalance + '\'' +
                ", printJobs=" + printJobs +
                ", transaction=" + transaction +
                '}';
    }
}
