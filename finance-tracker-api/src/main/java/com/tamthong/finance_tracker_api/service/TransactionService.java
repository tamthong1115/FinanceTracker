package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.dto.TransactionDTO;
import com.tamthong.finance_tracker_api.exception.ResourceNotFoundException;
import com.tamthong.finance_tracker_api.model.Transaction;
import com.tamthong.finance_tracker_api.model.TransactionStatus;
import com.tamthong.finance_tracker_api.model.User;
import com.tamthong.finance_tracker_api.repository.TransactionRepository;
import com.tamthong.finance_tracker_api.mapper.TransactionMapper;
import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TransactionService {
    private final TransactionRepository transactionRepository;
    private final TransactionMapper transactionMapper;
    private final UserService userService;

    @Transactional(readOnly = true)
    public List<TransactionDTO> getAllTransactionsByUser() {
        Long userId = userService.getCurrentUserId();
        return transactionRepository.findByUserIdOrderByDateDesc(userId)
                .stream()
                .map(transactionMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public TransactionDTO getTransaction(Long id) {
        Transaction transaction = getTransactionById(id);
        return transactionMapper.toDTO(transaction);
    }

    @Transactional
    public TransactionDTO createTransaction(TransactionDTO transactionDTO) {
        try {
            User currentUser = userService.getCurrentUser();

            Transaction transaction = transactionMapper.toEntity(transactionDTO);
            transaction.setUser(currentUser);

            // Set default values if not provided
            if (transaction.getDate() == null) {
                transaction.setDate(LocalDate.now());
            }
            if (transaction.getStatus() == null) {
                transaction.setStatus(TransactionStatus.COMPLETED);
            }

            Transaction savedTransaction = transactionRepository.save(transaction);
            return transactionMapper.toDTO(savedTransaction);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Error creating transaction: " + e.getMessage());
        }
    }

    @Transactional
    public TransactionDTO updateTransaction(Long id, TransactionDTO transactionDTO) {
        Transaction existingTransaction = getTransactionById(id);

        Transaction updatedTransaction = transactionMapper.toEntity(transactionDTO);
        updatedTransaction.setId(id);
        updatedTransaction.setUser(existingTransaction.getUser());

        // Preserve existing values if not provided in update
        if (updatedTransaction.getStatus() == null) {
            updatedTransaction.setStatus(existingTransaction.getStatus());
        }
        if (updatedTransaction.getDate() == null) {
            updatedTransaction.setDate(existingTransaction.getDate());
        }

        Transaction savedTransaction = transactionRepository.save(updatedTransaction);
        return transactionMapper.toDTO(savedTransaction);
    }

    @Transactional
    public void deleteTransaction(Long id) {
        Transaction transaction = getTransactionById(id);
        transactionRepository.delete(transaction);
    }

    private Transaction getTransactionById(Long id) {
        Long userId = userService.getCurrentUserId();
        Transaction transaction = transactionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Transaction not found"));

        if (!transaction.getUser().getId().equals(userId)) {
            throw new ResourceNotFoundException("Transaction not found");
        }

        return transaction;
    }

    public Page<TransactionDTO> getAllTransactionsByUser(Pageable pageable) {
        Long userId = userService.getCurrentUserId();
        Page<Transaction> transactionsPage = transactionRepository
                .findByUserIdOrderByDateDesc(userId, pageable);
        return transactionsPage.map(transactionMapper::toDTO);
    }

    @Transactional
    public List<TransactionDTO> createBulkTransactions(List<TransactionDTO> transactionsDTO) {
        User currentUser = userService.getCurrentUser();
        List<Transaction> transactions = transactionsDTO.stream()
                .map(transactionMapper::toEntity)
                .peek(transaction -> {
                    transaction.setUser(currentUser);
                    if (transaction.getStatus() == null) {
                        transaction.setStatus(TransactionStatus.COMPLETED);
                    }
                })
                .collect(Collectors.toList());

        List<Transaction> savedTransactions = transactionRepository.saveAll(transactions);
        return savedTransactions.stream()
                .map(transactionMapper::toDTO)
                .collect(Collectors.toList());
    }
}
