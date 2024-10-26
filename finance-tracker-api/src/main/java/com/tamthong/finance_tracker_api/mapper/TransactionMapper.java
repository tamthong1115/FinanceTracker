package com.tamthong.finance_tracker_api.mapper;

import com.tamthong.finance_tracker_api.dto.TransactionDTO;
import com.tamthong.finance_tracker_api.model.Transaction;
import com.tamthong.finance_tracker_api.model.User;
import org.mapstruct.*;

@Mapper(componentModel = "spring")
public interface TransactionMapper {
    @Mapping(target = "userId", source = "user.id")
    TransactionDTO toDTO(Transaction transaction);

    @Mapping(target = "user", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    Transaction toEntity(TransactionDTO dto);

    @AfterMapping
    default void mapUserReference(@MappingTarget Transaction transaction, TransactionDTO dto) {
        if (dto.getUserId() != null) {
            User user = new User();
            user.setId(dto.getUserId());
            transaction.setUser(user);
        }
    }
}