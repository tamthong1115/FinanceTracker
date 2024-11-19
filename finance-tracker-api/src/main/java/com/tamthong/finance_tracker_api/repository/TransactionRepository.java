package com.tamthong.finance_tracker_api.repository;

import com.tamthong.finance_tracker_api.model.Transaction;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Pageable;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findByUserIdOrderByDateDesc(Long userId);

    List<Transaction> findByUserIdAndDateBetweenOrderByDateDesc(Long userId, LocalDate startDate, LocalDate endDate);

    List<Transaction> findByUserIdAndCategoryOrderByDateDesc(Long userId, String category);

    Optional<Transaction> findTopByUserIdOrderByDateDesc(Long userId);

    Page<Transaction> findByUserIdOrderByDateDesc(Long userId, Pageable pageable);
}
