package com.tamthong.finance_tracker_api.controller;

import com.tamthong.finance_tracker_api.dto.CreateBudgetDTO;
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
    public Budget createBudget(@RequestBody CreateBudgetDTO budget) {
        return budgetService.createBudget(budget);
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
