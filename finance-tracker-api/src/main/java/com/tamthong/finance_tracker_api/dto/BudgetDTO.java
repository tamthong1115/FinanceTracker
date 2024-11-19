package com.tamthong.finance_tracker_api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BudgetDTO {
    private Long id;
    private Long userId;
    private String category;
    private BigDecimal limit;
    private BigDecimal spent;
    private String period;
    private LocalDate startDate;
    private LocalDate endDate;
    private LocalDate lastUpdated;
    @Override
    public String toString() {
        return "BudgetDTO{" +
                "id=" + id +
                ", userId=" + userId +
                ", category='" + category + '\'' +
                ", limit=" + limit +
                ", spent=" + spent +
                ", period='" + period + '\'' +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", lastUpdated=" + lastUpdated +
                '}';
    }
}
