package com.tamthong.finance_tracker_api.dto;
import lombok.Data;

@Data
public class RoleRequest {
    private String role;

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
