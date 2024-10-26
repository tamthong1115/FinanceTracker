package com.tamthong.finance_tracker_api.mapper;

import com.tamthong.finance_tracker_api.dto.UserDTO;
import com.tamthong.finance_tracker_api.model.User;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

@Component
@Mapper(componentModel = "spring")
public interface UserMapper {
    public UserDTO toDTO(User user);
}