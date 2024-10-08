package com.tamthong.finance_tracker_api.repository;

import com.tamthong.finance_tracker_api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    User findByEmail(String email);
    User findByName(String name);
    User findByEmailAndPassword(String email, String password);

}
