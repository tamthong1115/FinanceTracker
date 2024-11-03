package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.dto.BudgetDTO;
import com.tamthong.finance_tracker_api.exception.ResourceNotFoundException;
import com.tamthong.finance_tracker_api.mapper.BudgetMapper;
import com.tamthong.finance_tracker_api.model.Budget;
import com.tamthong.finance_tracker_api.repository.BudgetRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BudgetService {
    private final BudgetRepository budgetRepository;
    private final BudgetMapper budgetMapper;
    private final UserService userService;
    private final Logger logger = LoggerFactory.getLogger(BudgetService.class);

    @Transactional(readOnly = true)
    public List<BudgetDTO> getAllBudgetsByUser() {
        try {
            Long userId = userService.getCurrentUserId();
            return budgetRepository.findByUserIdOrderByCreatedAtDesc(userId)
                    .stream()
                    .map(budgetMapper::toDTO)
                    .collect(Collectors.toList());
        } catch (Exception e) {
            logger.error("Error fetching budgets for user", e);
            throw new RuntimeException("Error fetching budgets", e);
        }
    }

    @Transactional
    public BudgetDTO createBudget(BudgetDTO budgetDTO) {
        try {
            Budget budget = budgetMapper.toEntity(budgetDTO);
            budget.setUser(userService.getCurrentUser());
            budget.setSpent(BigDecimal.ZERO);
            Budget savedBudget = budgetRepository.save(budget);
            return budgetMapper.toDTO(savedBudget);
        } catch (Exception e) {
            logger.error("Error creating budget", e);
            throw new RuntimeException("Error creating budget", e);
        }
    }

    @Transactional
    public BudgetDTO updateBudget(Long id, BudgetDTO budgetDTO) {
        try {
            Budget existingBudget = getBudgetById(id);
            Budget updatedBudget = budgetMapper.toEntity(budgetDTO);
            updatedBudget.setId(id);
            updatedBudget.setUser(existingBudget.getUser());
            updatedBudget.setSpent(existingBudget.getSpent());
            Budget savedBudget = budgetRepository.save(updatedBudget);
            return budgetMapper.toDTO(savedBudget);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException("Budget not found");
        } catch (Exception e) {
            logger.error("Error updating budget", e);
            throw new RuntimeException("Error updating budget", e);
        }
    }

    @Transactional
    public void deleteBudget(Long id) {
        try {
            Budget budget = getBudgetById(id);
            budgetRepository.delete(budget);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException("Budget not found");
        } catch (Exception e) {
            logger.error("Error deleting budget", e);
            throw new RuntimeException("Error deleting budget", e);
        }
    }

    private Budget getBudgetById(Long id) {
        Long userId = userService.getCurrentUserId();
        Budget budget = budgetRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Budget not found"));

        if (!budget.getUser().getId().equals(userId)) {
            throw new ResourceNotFoundException("Budget not found");
        }

        return budget;
    }

    @Transactional
    public void updateBudgetSpent(Long id, BigDecimal amount) {
        try {
            Budget budget = getBudgetById(id);
            budget.setSpent(budget.getSpent().add(amount));
            budgetRepository.save(budget);
        } catch (Exception e) {
            logger.error("Error updating budget spent amount", e);
            throw new RuntimeException("Error updating budget spent amount", e);
        }
    }
}
