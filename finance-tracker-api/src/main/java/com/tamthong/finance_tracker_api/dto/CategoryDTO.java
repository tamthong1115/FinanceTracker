package com.tamthong.finance_tracker_api.dto;

import lombok.Data;

@Data
public class CategoryDTO {
    private String id;
    private String name;
    private String type; // INCOME, EXPENSE, BOTH
    private String color;
    private String icon;
}
