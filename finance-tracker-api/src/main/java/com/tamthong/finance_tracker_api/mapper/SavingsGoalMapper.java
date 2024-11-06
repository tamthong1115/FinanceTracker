package com.tamthong.finance_tracker_api.mapper;

import com.tamthong.finance_tracker_api.dto.SavingsGoalDTO;
import com.tamthong.finance_tracker_api.model.SavingsGoal;
import com.tamthong.finance_tracker_api.model.User;
import org.mapstruct.*;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface SavingsGoalMapper {
    @Mapping(target = "userId", source = "user.id")
    SavingsGoalDTO toDTO(SavingsGoal goal);

    @Mapping(target = "user", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    SavingsGoal toEntity(SavingsGoalDTO dto);

    @AfterMapping
    default void mapUserReference(@MappingTarget SavingsGoal goal, SavingsGoalDTO dto) {
        if (dto.getUserId() != null) {
            User user = new User();
            user.setId(dto.getUserId());
            goal.setUser(user);
        }
    }
}
