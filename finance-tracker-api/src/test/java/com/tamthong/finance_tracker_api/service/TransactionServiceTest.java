package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.dto.TransactionDTO;
import com.tamthong.finance_tracker_api.exception.ResourceNotFoundException;
import com.tamthong.finance_tracker_api.mapper.TransactionMapper;
import com.tamthong.finance_tracker_api.model.Transaction;
import com.tamthong.finance_tracker_api.model.TransactionStatus;
import com.tamthong.finance_tracker_api.model.User;
import com.tamthong.finance_tracker_api.repository.TransactionRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import java.time.LocalDate;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;


@ExtendWith(MockitoExtension.class)
public class TransactionServiceTest {

    @Mock
    private TransactionRepository transactionRepository;

    @Mock
    private TransactionMapper transactionMapper;

    @Mock
    private UserService userService;

    @InjectMocks
    private TransactionService transactionService;

    private User user;
    private Transaction transaction;
    private TransactionDTO transactionDTO;

    @BeforeEach
    void setUp() {
        user = new User();
        user.setId(1L);

        transaction = new Transaction();
        transaction.setId(1L);
        transaction.setUser(user);
        transaction.setDate(LocalDate.now());
        transaction.setStatus(TransactionStatus.COMPLETED);

        transactionDTO = new TransactionDTO();
        transactionDTO.setId(1L);
    }

    @Test
    void testGetAllTransactionsByUser() {
        when(userService.getCurrentUserId()).thenReturn(1L);
        when(transactionRepository.findByUserIdOrderByDateDesc(1L)).thenReturn(Collections.singletonList(transaction));
        when(transactionMapper.toDTO(transaction)).thenReturn(transactionDTO);

        List<TransactionDTO> result = transactionService.getAllTransactionsByUser();

        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals(transactionDTO, result.get(0));
    }

    @Test
    void testGetTransaction() {
        when(transactionRepository.findById(1L)).thenReturn(Optional.of(transaction));
        when(transactionMapper.toDTO(transaction)).thenReturn(transactionDTO);
        when(userService.getCurrentUserId()).thenReturn(1L);

        TransactionDTO result = transactionService.getTransaction(1L);

        assertNotNull(result);
        assertEquals(transactionDTO, result);
    }

    @Test
    void testCreateTransaction() {
        when(userService.getCurrentUser()).thenReturn(user);
        when(transactionMapper.toEntity(transactionDTO)).thenReturn(transaction);
        when(transactionRepository.save(transaction)).thenReturn(transaction);
        when(transactionMapper.toDTO(transaction)).thenReturn(transactionDTO);

        TransactionDTO result = transactionService.createTransaction(transactionDTO);

        assertNotNull(result);
        assertEquals(transactionDTO, result);
    }

    @Test
    void testUpdateTransaction() {
        when(transactionRepository.findById(1L)).thenReturn(Optional.of(transaction));
        when(transactionMapper.toEntity(transactionDTO)).thenReturn(transaction);
        when(transactionRepository.save(transaction)).thenReturn(transaction);
        when(transactionMapper.toDTO(transaction)).thenReturn(transactionDTO);
        when(userService.getCurrentUserId()).thenReturn(1L);

        TransactionDTO result = transactionService.updateTransaction(1L, transactionDTO);

        assertNotNull(result);
        assertEquals(transactionDTO, result);
    }

    @Test
    void testDeleteTransaction() {
        when(transactionRepository.findById(1L)).thenReturn(Optional.of(transaction));
        when(userService.getCurrentUserId()).thenReturn(1L);

        transactionService.deleteTransaction(1L);

        verify(transactionRepository, times(1)).delete(transaction);
    }

    @Test
    void testGetTransactionById_NotFound() {
        when(transactionRepository.findById(1L)).thenReturn(Optional.empty());
        when(userService.getCurrentUserId()).thenReturn(1L);

        assertThrows(ResourceNotFoundException.class, () -> transactionService.getTransaction(1L));
    }

    @Test
    void testGetTransactionById_UserMismatch() {
        User anotherUser = new User();
        anotherUser.setId(2L);
        transaction.setUser(anotherUser);

        when(transactionRepository.findById(1L)).thenReturn(Optional.of(transaction));
        when(userService.getCurrentUserId()).thenReturn(1L);

        assertThrows(ResourceNotFoundException.class, () -> transactionService.getTransaction(1L));
    }
}
