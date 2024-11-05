package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.model.Budget;
import com.tamthong.finance_tracker_api.repository.BudgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BudgetService {

    private final BudgetRepository budgetRepository;
    
    BudgetService(BudgetRepository budgetRepository) {
        this.budgetRepository = budgetRepository;
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

    public Budget save(Budget budget) {
        return budgetRepository.save(budget);
    }

    public void deleteById(Integer id) {
        budgetRepository.deleteById(id);
    }
}