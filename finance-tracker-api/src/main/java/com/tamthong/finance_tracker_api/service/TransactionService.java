package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.dto.CreateBudgetDTO;
import com.tamthong.finance_tracker_api.dto.TransactionDTO;
import com.tamthong.finance_tracker_api.exception.ResourceNotFoundException;
import com.tamthong.finance_tracker_api.model.*;
import com.tamthong.finance_tracker_api.repository.TransactionRepository;
import com.tamthong.finance_tracker_api.mapper.TransactionMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TransactionService {
    private final TransactionRepository transactionRepository;
    private final TransactionMapper transactionMapper;
    private final UserService userService;
    private final BudgetService budgetService;
    private final CategoryService categoryService;
    private final AccountService accountService;
    
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

            Category category = categoryService.findById(transactionDTO.getCategoryId())
                    .orElseThrow(() -> new IllegalArgumentException("Category not found"));
            transaction.setCategory(category);

            Account account = accountService.findById(transactionDTO.getAccountId())
                    .orElseThrow(() -> new IllegalArgumentException("Account not found"));
            transaction.setAccount(account);

            if (transaction.getDate() == null) {
                transaction.setDate(LocalDate.now());
            }

            if (transaction.getType() == null) {
                throw new IllegalArgumentException("Transaction type is required");
            }
            if (transaction.getAmount() == null || transaction.getAmount().compareTo(BigDecimal.ZERO) <= 0) {
                throw new IllegalArgumentException("Invalid amount");
            }

            Transaction savedTransaction = transactionRepository.save(transaction);
            updateBudgeWithTransaction(savedTransaction);
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
    
    private void updateBudgeWithTransaction(Transaction transaction){
        if(transaction.getType().equals(TransactionType.INCOME)){
            return;
        }


        budgetService.findByCategoryId(transaction.getCategory().getId())
                .filter(budget -> !budgetService.isBudgetExpired(budget))
                .ifPresent(budget -> {
                    if (budget.getAmount().compareTo(transaction.getAmount()) < 0) {
                        throw new IllegalArgumentException("Budget is not enough");
                    }

                    budget.setAmount(budget.getAmount().subtract(transaction.getAmount()));
                });
    }
}
