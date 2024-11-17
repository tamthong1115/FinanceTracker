package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.dto.dashboard.*;
import com.tamthong.finance_tracker_api.model.Transaction;
import com.tamthong.finance_tracker_api.model.TransactionType;
import com.tamthong.finance_tracker_api.repository.TransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.YearMonth;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DashboardService {
    private final TransactionRepository transactionRepository;
    private final UserService userService;

    public DashboardOverviewDTO getOverview() {
        Long userId = userService.getCurrentUserId();
        LocalDate startOfMonth = YearMonth.now().atDay(1);
        LocalDate endOfMonth = YearMonth.now().atEndOfMonth();

        List<Transaction> monthlyTransactions = transactionRepository
                .findByUserIdAndDateBetweenOrderByDateDesc(userId, startOfMonth, endOfMonth);

        BigDecimal monthlyIncome = calculateTotalByType(monthlyTransactions, TransactionType.INCOME);
        BigDecimal monthlyExpenses = calculateTotalByType(monthlyTransactions, TransactionType.EXPENSE);
        BigDecimal totalBalance = monthlyIncome.subtract(monthlyExpenses);

        double savingsRate = 0.0;
        if (monthlyIncome.compareTo(BigDecimal.ZERO) > 0) {
            savingsRate = totalBalance
                    .divide(monthlyIncome, 4, RoundingMode.HALF_UP)
                    .multiply(BigDecimal.valueOf(100))
                    .doubleValue();
        }

        return DashboardOverviewDTO.builder()
                .totalBalance(totalBalance)
                .monthlyIncome(monthlyIncome)
                .monthlyExpenses(monthlyExpenses)
                .savingsRate(savingsRate)
                .build();
    }

    public List<SpendingTrendDTO> getSpendingTrends() {
        Long userId = userService.getCurrentUserId();
        List<SpendingTrendDTO> trends = new ArrayList<>();

        // Get last 6 months of data
        for (int i = 5; i >= 0; i--) {
            YearMonth yearMonth = YearMonth.now().minusMonths(i);
            LocalDate startOfMonth = yearMonth.atDay(1);
            LocalDate endOfMonth = yearMonth.atEndOfMonth();

            List<Transaction> monthTransactions = transactionRepository
                    .findByUserIdAndDateBetweenOrderByDateDesc(userId, startOfMonth, endOfMonth);

            trends.add(SpendingTrendDTO.builder()
                    .month(yearMonth.getMonth().toString().substring(0, 3))
                    .income(calculateTotalByType(monthTransactions, TransactionType.INCOME))
                    .expenses(calculateTotalByType(monthTransactions, TransactionType.EXPENSE))
                    .build());
        }

        return trends;
    }

    public List<ExpenseByCategoryDTO> getExpensesByCategory() {
        Long userId = userService.getCurrentUserId();
        LocalDate startOfMonth = YearMonth.now().atDay(1);
        LocalDate endOfMonth = YearMonth.now().atEndOfMonth();

        List<Transaction> expenses = transactionRepository
                .findByUserIdAndDateBetweenOrderByDateDesc(userId, startOfMonth, endOfMonth)
                .stream()
                .filter(t -> t.getType() == TransactionType.EXPENSE)
                .collect(Collectors.toList());

        Map<String, BigDecimal> categoryTotals = expenses.stream()
                .collect(Collectors.groupingBy(
                        Transaction::getCategory,
                        Collectors.reducing(
                                BigDecimal.ZERO,
                                Transaction::getAmount,
                                BigDecimal::add)));

        // Assign colors to categories
        String[] colors = { "#FF8042", "#00C49F", "#FFBB28", "#0088FE", "#FF6B6B", "#4ECDC4" };
        int colorIndex = 0;

        List<ExpenseByCategoryDTO> result = new ArrayList<>();
        for (Map.Entry<String, BigDecimal> entry : categoryTotals.entrySet()) {
            result.add(ExpenseByCategoryDTO.builder()
                    .category(entry.getKey())
                    .amount(entry.getValue())
                    .color(colors[colorIndex % colors.length])
                    .build());
            colorIndex++;
        }

        return result;
    }

    public List<AlertDTO> getAlerts() {
        List<AlertDTO> alerts = new ArrayList<>();
        DashboardOverviewDTO overview = getOverview();

        // Check spending rate
        if (overview.getMonthlyExpenses().compareTo(overview.getMonthlyIncome()) > 0) {
            alerts.add(AlertDTO.builder()
                    .type("SPENDING")
                    .message("Your expenses exceed your income this month")
                    .severity("ERROR")
                    .build());
        }

        // Check savings rate
        if (overview.getSavingsRate() < 20) {
            alerts.add(AlertDTO.builder()
                    .type("SAVINGS")
                    .message("Your savings rate is below 20%. Consider reducing expenses.")
                    .severity("WARNING")
                    .build());
        }

        return alerts;
    }

    private BigDecimal calculateTotalByType(List<Transaction> transactions, TransactionType type) {
        return transactions.stream()
                .filter(t -> t.getType() == type)
                .map(Transaction::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }
}
