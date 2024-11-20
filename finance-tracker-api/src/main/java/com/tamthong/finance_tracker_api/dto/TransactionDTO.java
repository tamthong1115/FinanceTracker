package com.tamthong.finance_tracker_api.dto;

import com.tamthong.finance_tracker_api.model.TransactionType;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
public class TransactionDTO {
    private Long id;
    private Long userId;
    private BigDecimal amount;
    private String description;
    private String category;
    private TransactionType type;
    private LocalDateTime date;
    private String paymentMethod;
    private String notes;
    // private TransactionStatus status;
}
