package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.dto.CreateBudgetDTO;
import com.tamthong.finance_tracker_api.dto.ResponseBudgetDTO;
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

    public List<ResponseBudgetDTO> findAll() {
        List<Budget> budgets = budgetRepository.findAll();
        return budgets.stream()
                .map(this::mapToResponseBudgetDTO)
                .toList();
    }


    public Optional<ResponseBudgetDTO> findById(Integer id) {
        Optional<Budget> budget = budgetRepository.findById(id);
        return budget.map(this::mapToResponseBudgetDTO);
    }

    public Optional<Budget> findByCategoryId(Integer categoryId) {
        Optional<Budget> budget = budgetRepository.findByCategoryId(categoryId);
        return budget;
    }

    public Budget createBudget(@NotNull CreateBudgetDTO budget) {
        User currentUser = userService.getCurrentUser();

        Category category = categoryService.findById(budget.getCategoryId())
                .orElseThrow(() -> new IllegalArgumentException("Category not found"));

        Budget newBudget = new Budget();

        if(budget.getSpent() == null) {
            budget.setSpent(BigDecimal.valueOf(0.0));
        }

        newBudget.setCategory(category);
        newBudget.setAmount(budget.getAmount());
        newBudget.setSpent(budget.getSpent());
        newBudget.setStartDate(budget.getStartDate());
        newBudget.setEndDate(budget.getEndDate());
        newBudget.setLoop(budget.isLoop());
        newBudget.setUser(currentUser);

        return budgetRepository.save(newBudget);
    }

    public void deleteById(Integer id) {
        budgetRepository.deleteById(id);
    }

    public boolean isBudgetExpired(Budget budget) {
        return budget.getEndDate() != null && budget.getEndDate().isBefore(Instant.now());
    }

    private ResponseBudgetDTO mapToResponseBudgetDTO(Budget budget) {
        ResponseBudgetDTO dto = new ResponseBudgetDTO();
        dto.setId(budget.getId());
        dto.setCategoryName(budget.getCategory().getName());
        dto.setAmount(budget.getAmount());
        dto.setSpent(budget.getSpent());
        dto.setStartDate(budget.getStartDate());
        dto.setEndDate(budget.getEndDate());
        dto.setLoop(budget.isLoop());
        dto.setCreatedAt(budget.getCreatedAt());
        dto.setUserId(Math.toIntExact(budget.getUser().getId()));
        return dto;
    }

}