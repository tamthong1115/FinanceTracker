package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.dto.SavingsGoalDTO;
import com.tamthong.finance_tracker_api.mapper.SavingsGoalMapper;
import com.tamthong.finance_tracker_api.model.SavingsGoal;
import com.tamthong.finance_tracker_api.repository.SavingsGoalRepository;
import com.tamthong.finance_tracker_api.exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SavingsGoalService {
    private final SavingsGoalRepository savingsGoalRepository;
    private final SavingsGoalMapper savingsGoalMapper;
    private final UserService userService;

    @Transactional(readOnly = true)
    public List<SavingsGoalDTO> getAllGoalsByUser() {
        Long userId = userService.getCurrentUserId();
        return savingsGoalRepository.findByUserIdOrderByCreatedAtDesc(userId)
                .stream()
                .map(savingsGoalMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Transactional
    public SavingsGoalDTO createGoal(SavingsGoalDTO goalDTO) {
        SavingsGoal goal = savingsGoalMapper.toEntity(goalDTO);
        goal.setUser(userService.getCurrentUser());
        SavingsGoal savedGoal = savingsGoalRepository.save(goal);
        return savingsGoalMapper.toDTO(savedGoal);
    }

    @Transactional
    public SavingsGoalDTO updateGoal(Long id, SavingsGoalDTO goalDTO) {
        SavingsGoal existingGoal = getGoalById(id);
        SavingsGoal updatedGoal = savingsGoalMapper.toEntity(goalDTO);
        updatedGoal.setId(id);
        updatedGoal.setUser(existingGoal.getUser());
        SavingsGoal savedGoal = savingsGoalRepository.save(updatedGoal);
        return savingsGoalMapper.toDTO(savedGoal);
    }

    @Transactional
    public void deleteGoal(Long id) {
        SavingsGoal goal = getGoalById(id);
        savingsGoalRepository.delete(goal);
    }

    private SavingsGoal getGoalById(Long id) {
        Long userId = userService.getCurrentUserId();
        SavingsGoal goal = savingsGoalRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Goal not found"));

        if (!goal.getUser().getId().equals(userId)) {
            throw new ResourceNotFoundException("Goal not found");
        }

        return goal;
    }
}
