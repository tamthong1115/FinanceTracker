package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.dto.BudgetDTO;
import com.tamthong.finance_tracker_api.exception.ResourceNotFoundException;
import com.tamthong.finance_tracker_api.mapper.BudgetMapper;
import com.tamthong.finance_tracker_api.model.Budget;
import com.tamthong.finance_tracker_api.model.User;
import com.tamthong.finance_tracker_api.repository.BudgetRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.transaction.annotation.Transactional;
import java.math.BigDecimal;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class BudgetServiceTest {

    @Mock
    private BudgetRepository budgetRepository;

    @Mock
    private BudgetMapper budgetMapper;

    @Mock
    private UserService userService;

    @InjectMocks
    private BudgetService budgetService;

    private Budget budget;
    private BudgetDTO budgetDTO;
    private User user;

    @BeforeEach
    void setUp() {
        user = new User();
        user.setId(1L);

        budget = new Budget();
        budget.setId(1L);
        budget.setUser(user);
        budget.setSpent(BigDecimal.ZERO);

        budgetDTO = new BudgetDTO();
        budgetDTO.setId(1L);
    }

    @Test
    void testGetAllBudgetsByUser() {
        when(userService.getCurrentUserId()).thenReturn(1L);
        when(budgetRepository.findByUserIdOrderByCreatedAtDesc(1L)).thenReturn(Collections.singletonList(budget));
        when(budgetMapper.toDTO(any(Budget.class))).thenReturn(budgetDTO);

        List<BudgetDTO> result = budgetService.getAllBudgetsByUser();

        assertNotNull(result);
        assertEquals(1, result.size());
        verify(budgetRepository, times(1)).findByUserIdOrderByCreatedAtDesc(1L);
    }

    @Test
    void testCreateBudget() {
        when(budgetMapper.toEntity(any(BudgetDTO.class))).thenReturn(budget);
        when(userService.getCurrentUser()).thenReturn(user);
        when(budgetRepository.save(any(Budget.class))).thenReturn(budget);
        when(budgetMapper.toDTO(any(Budget.class))).thenReturn(budgetDTO);

        BudgetDTO result = budgetService.createBudget(budgetDTO);

        assertNotNull(result);
        assertEquals(budgetDTO.getId(), result.getId());
        verify(budgetRepository, times(1)).save(any(Budget.class));
    }

    @Test
    void testGetBudgetById_NotFound() {
        when(budgetRepository.findById(anyLong())).thenReturn(Optional.empty());

        assertThrows(ResourceNotFoundException.class, () -> budgetService.updateBudget(1L, budgetDTO));
    }
}
