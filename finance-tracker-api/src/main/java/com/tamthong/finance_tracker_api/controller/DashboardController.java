package com.tamthong.finance_tracker_api.controller;

import com.tamthong.finance_tracker_api.dto.dashboard.*;
import com.tamthong.finance_tracker_api.service.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dashboard")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class DashboardController {
    private final DashboardService dashboardService;

    @GetMapping("/overview")
    public ResponseEntity<DashboardOverviewDTO> getOverview() {
        return ResponseEntity.ok(dashboardService.getOverview());
    }

    @GetMapping("/trends")
    public ResponseEntity<List<SpendingTrendDTO>> getSpendingTrends() {
        return ResponseEntity.ok(dashboardService.getSpendingTrends());
    }

    @GetMapping("/expenses-by-category")
    public ResponseEntity<List<ExpenseByCategoryDTO>> getExpensesByCategory() {
        return ResponseEntity.ok(dashboardService.getExpensesByCategory());
    }

    @GetMapping("/alerts")
    public ResponseEntity<List<AlertDTO>> getAlerts() {
        return ResponseEntity.ok(dashboardService.getAlerts());
    }
}
