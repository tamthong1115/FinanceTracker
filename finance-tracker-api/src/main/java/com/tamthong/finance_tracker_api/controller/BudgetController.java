package com.tamthong.finance_tracker_api.controller;

import com.tamthong.finance_tracker_api.model.Budget;
import com.tamthong.finance_tracker_api.service.BudgetService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/budget")
public class BudgetController {
    
    private final BudgetService budgetService;
    
    BudgetController(BudgetService budgetService) {
        this.budgetService = budgetService;
    }

    @GetMapping
    public List<Budget> getAllBudgets() {
        return budgetService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Budget> getBudgetById(@PathVariable Integer id) {
        Optional<Budget> budget = budgetService.findById(id);
        return budget.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Budget createBudget(@RequestBody Budget budget) {
        return budgetService.save(budget);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Budget> updateBudget(@PathVariable Integer id, @RequestBody Budget budgetDetails) {
        Optional<Budget> budget = budgetService.findById(id);
        if (budget.isPresent()) {
            Budget updatedBudget = budget.get();
            updatedBudget.setAmount(budgetDetails.getAmount());
            updatedBudget.setStartDate(budgetDetails.getStartDate());
            updatedBudget.setEndDate(budgetDetails.getEndDate());
            updatedBudget.setCategory(budgetDetails.getCategory());
            return ResponseEntity.ok(budgetService.save(updatedBudget));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBudget(@PathVariable Integer id) {
        if (budgetService.findById(id).isPresent()) {
            budgetService.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
