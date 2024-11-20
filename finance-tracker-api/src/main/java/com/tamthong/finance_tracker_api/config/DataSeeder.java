package com.tamthong.finance_tracker_api.config;

import com.tamthong.finance_tracker_api.model.*;
import com.tamthong.finance_tracker_api.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

@Component
@RequiredArgsConstructor
public class DataSeeder {
    private final UserRepository userRepository;
    private final TransactionRepository transactionRepository;
    private final BudgetRepository budgetRepository;
    private final SavingsGoalRepository savingsGoalRepository;
    private final Random random = new Random();

    public void seedDataForUser(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        LocalDateTime lastTransactionDate = transactionRepository.findTopByUserIdOrderByDateTimeDesc(userId)
                .map(Transaction::getDateTime)
                .orElse(LocalDateTime.now().minusMonths(6));

        List<String> categories = Arrays.asList(
                "Food & Dining", "Transportation", "Shopping", "Entertainment",
                "Bills & Utilities", "Health", "Travel", "Education");

        List<String> paymentMethods = Arrays.asList(
                "Cash", "Credit Card", "Bank Transfer", "E-Wallet");

        // Create transactions from the last transaction date to now
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime startDate = lastTransactionDate.plusDays(1);

        for (LocalDateTime date = startDate; date.isBefore(now.plusDays(1)); date = date.plusDays(1)) {
            // Create 1-3 transactions per day
            int transactionsPerDay = random.nextInt(3) + 1;
            for (int j = 0; j < transactionsPerDay; j++) {
                TransactionType type = random.nextDouble() < 0.7 ? TransactionType.EXPENSE : TransactionType.INCOME;

                BigDecimal amount;
                String category;
                if (type == TransactionType.EXPENSE) {
                    amount = BigDecimal.valueOf(random.nextInt(1000000) + 50000);
                    category = categories.get(random.nextInt(categories.size()));
                } else {
                    amount = BigDecimal.valueOf(random.nextInt(5000000) + 5000000);
                    category = "Salary";
                }

                Transaction transaction = Transaction.builder()
                        .user(user)
                        .amount(amount)
                        .type(type)
                        .category(category)
                        .dateTime(date)
                        .description(generateDescription(type, category))
                        .paymentMethod(paymentMethods.get(random.nextInt(paymentMethods.size())))
                        .status(TransactionStatus.COMPLETED)
                        .build();
                transactionRepository.save(transaction);
            }
        }

        // Update or create budgets for the current month
        for (String category : categories) {
            // Check if budget exists for this category and month
            LocalDate nowDate = now.toLocalDate();
            LocalDate monthStart = nowDate.withDayOfMonth(1);
            LocalDate monthEnd = nowDate.withDayOfMonth(nowDate.lengthOfMonth());

            Budget existingBudget = budgetRepository
                    .findByUserIdAndCategoryAndStartDateAndEndDate(
                            userId, category, monthStart, monthEnd)
                    .orElse(null);

            if (existingBudget == null) {
                Budget budget = Budget.builder()
                        .user(user)
                        .category(category)
                        .limit(BigDecimal.valueOf(random.nextInt(5000000) + 2000000))
                        .spent(BigDecimal.valueOf(random.nextInt(3000000) + 1000000))
                        .period(BudgetPeriod.MONTHLY)
                        .startDate(monthStart)
                        .endDate(monthEnd)
                        .build();
                budgetRepository.save(budget);
            }
        }

        // Add more savings goals if less than 3 exist
        long goalsCount = savingsGoalRepository.countByUserId(userId);
        if (goalsCount < 3) {
            List<String> goalNames = Arrays.asList(
                    "Emergency Fund", "New Laptop", "Vacation", "Wedding",
                    "House Down Payment", "Car");

            for (int i = 0; i < 3 - goalsCount; i++) {
                String goalName = goalNames.get(random.nextInt(goalNames.size()));
                BigDecimal targetAmount = BigDecimal.valueOf(random.nextInt(100000000) + 50000000);
                BigDecimal currentAmount = targetAmount.multiply(BigDecimal.valueOf(random.nextDouble()));

                SavingsGoal goal = SavingsGoal.builder()
                        .user(user)
                        .name(goalName)
                        .targetAmount(targetAmount)
                        .currentAmount(currentAmount)
                        .deadline(now.toLocalDate().plusMonths(random.nextInt(12) + 6))
                        .color(generateRandomColor())
                        .build();
                savingsGoalRepository.save(goal);
            }
        }
    }

    private String generateDescription(TransactionType type, String category) {
        if (type == TransactionType.INCOME) {
            return "Monthly Salary";
        }

        List<String> descriptions;
        switch (category) {
            case "Food & Dining":
                descriptions = Arrays.asList(
                        "Lunch at Restaurant", "Grocery Shopping", "Coffee Shop",
                        "Dinner with Friends", "Food Delivery");
                break;
            case "Transportation":
                descriptions = Arrays.asList(
                        "Taxi Ride", "Bus Ticket", "Fuel", "Parking Fee",
                        "Vehicle Maintenance");
                break;
            case "Shopping":
                descriptions = Arrays.asList(
                        "Clothing Purchase", "Electronics", "Home Supplies",
                        "Books", "Personal Care Items");
                break;
            case "Entertainment":
                descriptions = Arrays.asList(
                        "Movie Tickets", "Concert", "Game Purchase",
                        "Streaming Service", "Hobby Supplies");
                break;
            default:
                descriptions = Arrays.asList(
                        "General Purchase", "Service Payment", "Miscellaneous",
                        "Regular Payment", "Monthly Fee");
        }
        return descriptions.get(random.nextInt(descriptions.size()));
    }

    private String generateRandomColor() {
        String[] colors = {
                "#FF8042", "#00C49F", "#FFBB28", "#0088FE",
                "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"
        };
        return colors[random.nextInt(colors.length)];
    }
}
