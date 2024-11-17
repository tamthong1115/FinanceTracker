package com.tamthong.finance_tracker_api.dto.dashboard;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DashboardOverviewDTO {
    private BigDecimal totalBalance;
    private BigDecimal monthlyIncome;
    private BigDecimal monthlyExpenses;
    private double savingsRate;
}
