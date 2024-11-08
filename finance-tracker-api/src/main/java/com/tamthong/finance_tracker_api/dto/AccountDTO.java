package com.tamthong.finance_tracker_api.dto;

import com.tamthong.finance_tracker_api.model.User;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class AccountDTO {
    private Long id;
    private String name;
    private BigDecimal balance;
    private String type;
    private User user;
}
