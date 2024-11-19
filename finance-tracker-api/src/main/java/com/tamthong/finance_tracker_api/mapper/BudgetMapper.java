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

    @Mapping(target = "user.id", source = "userId")
    @Mapping(target = "updatedAt", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "id", ignore = true)
    Budget toEntity(BudgetDTO budgetDTO);

    @AfterMapping
    default void mapUserReference(@MappingTarget Budget.BudgetBuilder budget, BudgetDTO dto) {
        if (dto.getUserId() != null) {
            User user = new User();
            user.setId(dto.getUserId());
            budget.user(user);
        }
    }
}
