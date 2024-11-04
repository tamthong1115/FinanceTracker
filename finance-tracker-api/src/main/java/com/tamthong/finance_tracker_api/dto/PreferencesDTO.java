package com.tamthong.finance_tracker_api.dto;

import lombok.Data;

@Data
public class PreferencesDTO {
    private String currency;
    private Integer fiscalMonthStartDay;
    private String dateFormat;
    private Boolean darkMode;
}
