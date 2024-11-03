package com.tamthong.finance_tracker_api.controller;

import com.tamthong.finance_tracker_api.dto.BudgetDTO;
import com.tamthong.finance_tracker_api.service.BudgetService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/budgets")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class BudgetController {
    private final BudgetService budgetService;

    @GetMapping
    public ResponseEntity<List<BudgetDTO>> getAllBudgets() {
        return ResponseEntity.ok(budgetService.getAllBudgetsByUser());
    }

    @PostMapping
    public ResponseEntity<BudgetDTO> createBudget(@RequestBody BudgetDTO budgetDTO) {
        return ResponseEntity.ok(budgetService.createBudget(budgetDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<BudgetDTO> updateBudget(
            @PathVariable Long id,
            @RequestBody BudgetDTO budgetDTO) {
        return ResponseEntity.ok(budgetService.updateBudget(id, budgetDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBudget(@PathVariable Long id) {
        budgetService.deleteBudget(id);
        return ResponseEntity.ok().build();
    }
}
