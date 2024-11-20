package com.tamthong.finance_tracker_api.repository;

import com.tamthong.finance_tracker_api.model.Transaction;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Pageable;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findByUserIdOrderByDateTimeDesc(Long userId);

    List<Transaction> findByUserIdAndDateTimeBetweenOrderByDateTimeDesc(
        Long userId, 
        LocalDateTime startDateTime, 
        LocalDateTime endDateTime
    );

    List<Transaction> findByUserIdAndCategoryOrderByDateTimeDesc(Long userId, String category);

    Optional<Transaction> findTopByUserIdOrderByDateTimeDesc(Long userId);

    Page<Transaction> findByUserIdOrderByDateTimeDesc(Long userId, Pageable pageable);
}
