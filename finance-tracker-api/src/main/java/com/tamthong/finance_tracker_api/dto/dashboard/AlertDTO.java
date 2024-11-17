package com.tamthong.finance_tracker_api.dto.dashboard;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AlertDTO {
    private String type;
    private String message;
    private String severity; // INFO, WARNING, ERROR
}
