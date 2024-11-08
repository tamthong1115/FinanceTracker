package com.tamthong.finance_tracker_api.dto;

import com.tamthong.finance_tracker_api.model.User;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.Instant;

@Getter
@Setter
public class CreateBudgetDTO {
    private User user;
    private Integer categoryId;
    private BigDecimal amount;
    private BigDecimal spent;
    private Instant startDate;
    private Instant endDate;
    private boolean isLoop;
    

    
}