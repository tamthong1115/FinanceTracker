package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.dto.CreateBudgetDTO;
import com.tamthong.finance_tracker_api.exception.ResourceNotFoundException;
import com.tamthong.finance_tracker_api.model.Budget;
import com.tamthong.finance_tracker_api.model.Category;
import com.tamthong.finance_tracker_api.model.User;
import com.tamthong.finance_tracker_api.repository.BudgetRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;
import java.util.Optional;

@Service
public class BudgetService {

    private final BudgetRepository budgetRepository;
    private final UserService userService;
    private final CategoryService categoryService;
    
    BudgetService(BudgetRepository budgetRepository, UserService userService, CategoryService categoryService) {
        this.budgetRepository = budgetRepository;
        this.userService = userService;
        this.categoryService = categoryService;
    }

    public List<Budget> findAll() {
        return budgetRepository.findAll();
    }

    public Optional<Budget> findById(Integer id) {
        return budgetRepository.findById(id);
    }
    
    public Optional<Budget> findByCategoryId(Integer categoryId) {
        return budgetRepository.findByCategoryId(categoryId);
    }

    public Budget createBudget(@NotNull CreateBudgetDTO budget) {
        User currentUser = userService.getCurrentUser();

        Category category = categoryService.findById(budget.getCategoryId())
                .orElseThrow(() -> new IllegalArgumentException("Category not found"));
        
        Budget newBudget = new Budget();
        
        newBudget.setCategory(category);
        newBudget.setAmount(budget.getAmount());
        newBudget.setStartDate(budget.getStartDate());
        newBudget.setEndDate(budget.getEndDate());
        newBudget.setUser(currentUser);
        
        return budgetRepository.save(newBudget);
    }

    public void deleteById(Integer id) {
        budgetRepository.deleteById(id);
    }
    

    public boolean isBudgetExpired(Budget budget) {
        return budget.getEndDate() != null && budget.getEndDate().isBefore(Instant.now());
    }
}