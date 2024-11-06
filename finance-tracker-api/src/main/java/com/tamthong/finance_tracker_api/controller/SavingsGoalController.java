package com.tamthong.finance_tracker_api.controller;

import com.tamthong.finance_tracker_api.dto.SavingsGoalDTO;
import com.tamthong.finance_tracker_api.service.SavingsGoalService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/goals")
@RequiredArgsConstructor
public class SavingsGoalController {
    private final SavingsGoalService savingsGoalService;

    @GetMapping
    public ResponseEntity<List<SavingsGoalDTO>> getAllGoals() {
        return ResponseEntity.ok(savingsGoalService.getAllGoalsByUser());
    }

    @PostMapping
    public ResponseEntity<SavingsGoalDTO> createGoal(@RequestBody SavingsGoalDTO goalDTO) {
        return ResponseEntity.ok(savingsGoalService.createGoal(goalDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<SavingsGoalDTO> updateGoal(
            @PathVariable Long id,
            @RequestBody SavingsGoalDTO goalDTO) {
        return ResponseEntity.ok(savingsGoalService.updateGoal(id, goalDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGoal(@PathVariable Long id) {
        savingsGoalService.deleteGoal(id);
        return ResponseEntity.ok().build();
    }
}
