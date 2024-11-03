package com.tamthong.finance_tracker_api.mapper;

import com.tamthong.finance_tracker_api.dto.BudgetDTO;
import com.tamthong.finance_tracker_api.model.Budget;
import com.tamthong.finance_tracker_api.model.User;
import org.mapstruct.*;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface BudgetMapper {
    @Mapping(target = "userId", source = "user.id")
    @Mapping(target = "lastUpdated", source = "updatedAt")
    BudgetDTO toDTO(Budget budget);

    @Mapping(target = "user", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    Budget toEntity(BudgetDTO dto);

    @AfterMapping
    default void mapUserReference(@MappingTarget Budget budget, BudgetDTO dto) {
        if (dto.getUserId() != null) {
            User user = new User();
            user.setId(dto.getUserId());
            budget.setUser(user);
        }
    }
}
