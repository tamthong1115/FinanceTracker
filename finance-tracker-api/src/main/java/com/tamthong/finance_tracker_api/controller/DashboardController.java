package com.tamthong.finance_tracker_api.controller;

import com.tamthong.finance_tracker_api.dto.dashboard.*;
import com.tamthong.finance_tracker_api.service.DashboardService;
import lombok.RequiredArgsConstructor;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/dashboard")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class DashboardController {
    private final DashboardService dashboardService;

    @GetMapping("/overview")
    public ResponseEntity<DashboardOverviewDTO> getOverview(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime startDateTime,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime endDateTime) {
        return ResponseEntity.ok(dashboardService.getOverview(startDateTime, endDateTime));
    }

    @GetMapping("/trends")
    public ResponseEntity<List<SpendingTrendDTO>> getSpendingTrends(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime startDateTime,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime endDateTime) {
        return ResponseEntity.ok(dashboardService.getSpendingTrends(startDateTime, endDateTime));
    }

    @GetMapping("/expenses-by-category")
    public ResponseEntity<List<ExpenseByCategoryDTO>> getExpensesByCategory(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime startDateTime,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime endDateTime) {
        return ResponseEntity.ok(dashboardService.getExpensesByCategory(startDateTime, endDateTime));
    }

    @GetMapping("/alerts")
    public ResponseEntity<List<AlertDTO>> getAlerts(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime startDateTime,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime endDateTime) {
        return ResponseEntity.ok(dashboardService.getAlerts(startDateTime.toLocalDate(), endDateTime.toLocalDate()));
    }
}
