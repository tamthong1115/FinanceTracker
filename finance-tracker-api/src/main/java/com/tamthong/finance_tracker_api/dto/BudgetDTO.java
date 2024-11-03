package com.tamthong.finance_tracker_api.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
public class BudgetDTO {
    private Long id;
    private Long userId;
    private String category;
    private BigDecimal limit;
    private BigDecimal spent;
    private String period;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private LocalDateTime lastUpdated;
}
