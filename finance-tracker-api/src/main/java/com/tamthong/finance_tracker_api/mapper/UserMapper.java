package com.tamthong.finance_tracker_api.mapper;

import com.tamthong.finance_tracker_api.dto.UserDTO;
import com.tamthong.finance_tracker_api.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.stereotype.Component;

@Component
@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDTO toDTO(User user);

    User toEntity(UserDTO dto);
}
