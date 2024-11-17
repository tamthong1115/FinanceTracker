package com.tamthong.finance_tracker_api.repository;

import com.tamthong.finance_tracker_api.model.Budget;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface BudgetRepository extends JpaRepository<Budget, Long> {
    List<Budget> findByUserIdOrderByCreatedAtDesc(Long userId);

    List<Budget> findByUserIdAndCategory(Long userId, String category);

    Optional<Budget> findByUserIdAndCategoryAndStartDateAndEndDate(
        Long userId, String category, LocalDate startDate, LocalDate endDate
    );
}
