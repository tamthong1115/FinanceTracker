package com.tamthong.finance_tracker_api.mapper;

import com.tamthong.finance_tracker_api.dto.UserSettingsDTO;
import com.tamthong.finance_tracker_api.model.UserSettings;
import com.tamthong.finance_tracker_api.model.User;
import org.mapstruct.*;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface UserSettingsMapper {
    @Mapping(target = "userId", source = "user.id")
    UserSettingsDTO toDTO(UserSettings settings);

    @Mapping(target = "user", ignore = true)
    UserSettings toEntity(UserSettingsDTO dto);

    @AfterMapping
    default void mapUserReference(@MappingTarget UserSettings settings, UserSettingsDTO dto) {
        if (dto.getUserId() != null) {
            User user = new User();
            user.setId(dto.getUserId());
            settings.setUser(user);
        }
    }
}
