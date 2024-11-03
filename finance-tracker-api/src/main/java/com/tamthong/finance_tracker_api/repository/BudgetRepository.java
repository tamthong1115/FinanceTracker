package com.tamthong.finance_tracker_api.repository;

import com.tamthong.finance_tracker_api.model.Budget;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BudgetRepository extends JpaRepository<Budget, Long> {
    List<Budget> findByUserIdOrderByCreatedAtDesc(Long userId);

    List<Budget> findByUserIdAndCategory(Long userId, String category);
}
