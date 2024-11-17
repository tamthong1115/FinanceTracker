// DashboardOverviewDTO.java
package com.tamthong.finance_tracker_api.dto.dashboard;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SpendingTrendDTO {
    private String month;
    private BigDecimal income;
    private BigDecimal expenses;
}
