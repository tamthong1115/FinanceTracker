package com.tamthong.finance_tracker_api.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.Instant;

@Getter
@Setter
public class ResponseBudgetDTO {
    private Integer id;
    private String categoryName;
    private BigDecimal amount;
    private BigDecimal spent;
    private Instant startDate;
    private Instant endDate;
    private boolean isLoop;
    private Instant createdAt;
    private Integer userId;

}
