package com.tamthong.finance_tracker_api.mapper;

import com.tamthong.finance_tracker_api.dto.TransactionDTO;
import com.tamthong.finance_tracker_api.model.Transaction;
import org.mapstruct.*;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface TransactionMapper {
    @Mapping(target = "userId", source = "user.id")
    TransactionDTO toDTO(Transaction transaction);

    @Mapping(target = "user", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    Transaction toEntity(TransactionDTO dto);
}
