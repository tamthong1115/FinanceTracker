package com.tamthong.finance_tracker_api.repository;

import com.tamthong.finance_tracker_api.model.Budget;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BudgetRepository extends JpaRepository<Budget, Integer> {
    @NotNull Optional<Budget> findById(@NotNull Integer id);
    @NotNull Optional<Budget> findByCategoryId(@NotNull Integer categoryId);
}