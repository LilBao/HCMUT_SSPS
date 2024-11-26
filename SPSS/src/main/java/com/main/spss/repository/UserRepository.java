package com.main.spss.repository;

import com.main.spss.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findUserByEmail(String email);

    @Query("SELECT o FROM User o JOIN Role r WHERE o.isEnabled = true and r.id = 1")
    List<User> findAllStudent();
}
