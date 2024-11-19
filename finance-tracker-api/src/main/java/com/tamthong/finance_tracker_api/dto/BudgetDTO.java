package com.tamthong.finance_tracker_api.dto;

import lombok.Builder;
import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Builder
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
}
