package com.tamthong.finance_tracker_api.controller;

import com.tamthong.finance_tracker_api.dto.dashboard.*;
import com.tamthong.finance_tracker_api.service.DashboardService;
import lombok.RequiredArgsConstructor;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/dashboard")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class DashboardController {
    private final DashboardService dashboardService;

    @GetMapping("/overview")
    public ResponseEntity<DashboardOverviewDTO> getOverview(
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate startDate,
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate endDate) {
        return ResponseEntity.ok(dashboardService.getOverview(startDate, endDate));
    }

    @GetMapping("/trends")
    public ResponseEntity<List<SpendingTrendDTO>> getSpendingTrends(
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate startDate,
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate endDate) {
        return ResponseEntity.ok(dashboardService.getSpendingTrends(startDate, endDate));
    }

    @GetMapping("/expenses-by-category")
    public ResponseEntity<List<ExpenseByCategoryDTO>> getExpensesByCategory(
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate startDate,
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate endDate) {
        return ResponseEntity.ok(dashboardService.getExpensesByCategory(startDate, endDate));
    }

    @GetMapping("/alerts")
    public ResponseEntity<List<AlertDTO>> getAlerts(
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate startDate,
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate endDate) {
        return ResponseEntity.ok(dashboardService.getAlerts(startDate, endDate));
    }
}
