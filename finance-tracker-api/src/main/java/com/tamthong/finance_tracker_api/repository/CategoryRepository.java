package com.tamthong.finance_tracker_api.repository;

import com.tamthong.finance_tracker_api.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, String> {
    List<Category> findByUserIdIsNull();

    List<Category> findByUserId(Long userId);

    boolean existsByNameAndUserId(String name, Long userId);
}
