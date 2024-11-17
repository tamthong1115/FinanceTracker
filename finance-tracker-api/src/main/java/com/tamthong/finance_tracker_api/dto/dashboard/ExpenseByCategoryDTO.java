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
public class ExpenseByCategoryDTO {
    private String category;
    private BigDecimal amount;
    private String color;
}
