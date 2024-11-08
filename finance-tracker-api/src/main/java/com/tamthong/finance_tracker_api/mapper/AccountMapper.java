package com.tamthong.finance_tracker_api.mapper;

import com.tamthong.finance_tracker_api.dto.AccountDTO;
import com.tamthong.finance_tracker_api.model.Account;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface AccountMapper {

    @Mappings({
            @Mapping(target = "user", source = "user"),
            @Mapping(target = "type", source = "type")
    })
    void updateEntityFromDTO(AccountDTO accountDTO, @MappingTarget Account account);

    @Mappings({
            @Mapping(source = "user", target = "user"),
            @Mapping(source = "type", target = "type")
    })AccountDTO toDTO(Account account);

    @Mappings({
            @Mapping(source = "user", target = "user"),
            @Mapping(source = "type", target = "type")
    })
    Account toEntity(AccountDTO accountDTO);

}
