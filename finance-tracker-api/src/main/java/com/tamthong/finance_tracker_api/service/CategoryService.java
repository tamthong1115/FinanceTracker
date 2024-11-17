package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.dto.CategoryDTO;
import com.tamthong.finance_tracker_api.model.Category;
import com.tamthong.finance_tracker_api.model.CategoryType;
import com.tamthong.finance_tracker_api.repository.CategoryRepository;
import com.tamthong.finance_tracker_api.exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;
    private final UserService userService;

    @Transactional(readOnly = true)
    public List<CategoryDTO> getAllCategories() {
        // First get default categories
        List<Category> allCategories = categoryRepository.findByUserIdIsNull();

        // Then get user custom categories
        Long userId = userService.getCurrentUserId();
        allCategories.addAll(categoryRepository.findByUserId(userId));

        return allCategories.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Transactional
    public CategoryDTO createCategory(CategoryDTO categoryDTO) {
        Category category = new Category();
        category.setId(UUID.randomUUID().toString());
        category.setName(categoryDTO.getName());
        category.setType(CategoryType.valueOf(categoryDTO.getType()));
        category.setColor(categoryDTO.getColor());
        category.setIcon(categoryDTO.getIcon());
        category.setUser(userService.getCurrentUser()); // Set current user for custom categories

        Category savedCategory = categoryRepository.save(category);
        return convertToDTO(savedCategory);
    }

    @Transactional
    public CategoryDTO updateCategory(String id, CategoryDTO categoryDTO) {
        Category category = getCategoryById(id);

        // Verify if the category belongs to the current user
        if (category.getUser() != null &&
                !category.getUser().getId().equals(userService.getCurrentUserId())) {
            throw new ResourceNotFoundException("Category not found");
        }

        // Only user-created categories can be updated
        if (category.getUser() == null) {
            throw new IllegalStateException("Default categories cannot be modified");
        }

        category.setName(categoryDTO.getName());
        category.setType(CategoryType.valueOf(categoryDTO.getType()));
        category.setColor(categoryDTO.getColor());
        category.setIcon(categoryDTO.getIcon());

        Category updatedCategory = categoryRepository.save(category);
        return convertToDTO(updatedCategory);
    }

    @Transactional
    public void deleteCategory(String id) {
        Category category = getCategoryById(id);

        // Verify if the category belongs to the current user
        if (category.getUser() != null &&
                !category.getUser().getId().equals(userService.getCurrentUserId())) {
            throw new ResourceNotFoundException("Category not found");
        }

        // Only user-created categories can be deleted
        if (category.getUser() == null) {
            throw new IllegalStateException("Default categories cannot be deleted");
        }

        categoryRepository.delete(category);
    }

    @Transactional
    public void initializeDefaultCategories() {
        if (categoryRepository.findByUserIdIsNull().isEmpty()) {
            // Create default income categories
            createDefaultCategory("Salary", CategoryType.INCOME, "#4CAF50", "wallet");
            createDefaultCategory("Investment", CategoryType.INCOME, "#2196F3", "trending-up");
            createDefaultCategory("Business", CategoryType.INCOME, "#9C27B0", "briefcase");
            createDefaultCategory("Other Income", CategoryType.INCOME, "#607D8B", "plus-circle");

            // Create default expense categories
            createDefaultCategory("Food & Dining", CategoryType.EXPENSE, "#FF5722", "coffee");
            createDefaultCategory("Transportation", CategoryType.EXPENSE, "#FF9800", "car");
            createDefaultCategory("Shopping", CategoryType.EXPENSE, "#E91E63", "shopping-bag");
            createDefaultCategory("Housing", CategoryType.EXPENSE, "#795548", "home");
            createDefaultCategory("Utilities", CategoryType.EXPENSE, "#009688", "zap");
            createDefaultCategory("Healthcare", CategoryType.EXPENSE, "#F44336", "heart");
            createDefaultCategory("Entertainment", CategoryType.EXPENSE, "#673AB7", "music");
            createDefaultCategory("Education", CategoryType.EXPENSE, "#3F51B5", "book");
            createDefaultCategory("Other Expenses", CategoryType.EXPENSE, "#9E9E9E", "more-horizontal");
        }
    }

    private void createDefaultCategory(String name, CategoryType type, String color, String icon) {
        Category category = new Category();
        category.setId(UUID.randomUUID().toString());
        category.setName(name);
        category.setType(type);
        category.setColor(color);
        category.setIcon(icon);
        // No user set for default categories
        categoryRepository.save(category);
    }

    private Category getCategoryById(String id) {
        return categoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Category not found"));
    }

    private CategoryDTO convertToDTO(Category category) {
        CategoryDTO dto = new CategoryDTO();
        dto.setId(category.getId());
        dto.setName(category.getName());
        dto.setType(category.getType().toString());
        dto.setColor(category.getColor());
        dto.setIcon(category.getIcon());
        return dto;
    }
}
