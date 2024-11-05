package com.tamthong.finance_tracker_api.repository;

import com.tamthong.finance_tracker_api.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {
}