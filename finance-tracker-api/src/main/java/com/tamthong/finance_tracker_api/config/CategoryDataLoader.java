package com.tamthong.finance_tracker_api.config;

import com.tamthong.finance_tracker_api.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class CategoryDataLoader implements CommandLineRunner {
    private final CategoryService categoryService;

    @Override
    public void run(String... args) {
        categoryService.initializeDefaultCategories();
    }
}
