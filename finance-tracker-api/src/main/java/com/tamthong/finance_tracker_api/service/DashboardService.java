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
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DashboardService {
    private final TransactionRepository transactionRepository;
    private final UserService userService;

    public List<SpendingTrendDTO> getSpendingTrends(LocalDate startDate, LocalDate endDate) {
        Long userId = userService.getCurrentUserId();
        List<SpendingTrendDTO> trends = new ArrayList<>();

        // Lấy tất cả transactions trong khoảng thời gian
        List<Transaction> transactions = transactionRepository
                .findByUserIdAndDateBetweenOrderByDateDesc(userId, startDate, endDate);

        // Nhóm transactions theo tháng
        Map<YearMonth, SpendingTrendDTO> trendMap = new TreeMap<>();

        // Khởi tạo tất cả các tháng trong khoảng thời gian
        YearMonth start = YearMonth.from(startDate);
        YearMonth end = YearMonth.from(endDate);
        while (!start.isAfter(end)) {
            trendMap.put(start, SpendingTrendDTO.builder()
                    .month(start.toString())
                    .income(BigDecimal.ZERO)
                    .expenses(BigDecimal.ZERO)
                    .build());
            start = start.plusMonths(1);
        }

        // Tính toán income và expenses cho mỗi tháng
        for (Transaction transaction : transactions) {
            YearMonth yearMonth = YearMonth.from(transaction.getDate());
            SpendingTrendDTO monthTrend = trendMap.get(yearMonth);

            if (monthTrend != null) {
                if (transaction.getType() == TransactionType.INCOME) {
                    monthTrend.setIncome(monthTrend.getIncome().add(transaction.getAmount()));
                } else {
                    monthTrend.setExpenses(monthTrend.getExpenses().add(transaction.getAmount()));
                }
            }
        }

        return new ArrayList<>(trendMap.values());
    }

    public DashboardOverviewDTO getOverview(LocalDate startDate, LocalDate endDate) {
        Long userId = userService.getCurrentUserId();
        List<Transaction> transactions = transactionRepository
                .findByUserIdAndDateBetweenOrderByDateDesc(userId, startDate, endDate);

        BigDecimal income = calculateTotalByType(transactions, TransactionType.INCOME);
        BigDecimal expenses = calculateTotalByType(transactions, TransactionType.EXPENSE);
        BigDecimal balance = income.subtract(expenses);

        double savingsRate = 0.0;
        if (income.compareTo(BigDecimal.ZERO) > 0) {
            savingsRate = balance
                    .divide(income, 4, RoundingMode.HALF_UP)
                    .multiply(BigDecimal.valueOf(100))
                    .doubleValue();
        }

        return DashboardOverviewDTO.builder()
                .totalBalance(balance)
                .monthlyIncome(income)
                .monthlyExpenses(expenses)
                .savingsRate(savingsRate)
                .build();
    }

    public List<ExpenseByCategoryDTO> getExpensesByCategory(LocalDate startDate, LocalDate endDate) {
        Long userId = userService.getCurrentUserId();
        List<Transaction> expenses = transactionRepository
                .findByUserIdAndDateBetweenOrderByDateDesc(userId, startDate, endDate)
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

        String[] colors = { "#FF8042", "#00C49F", "#FFBB28", "#0088FE", "#FF6B6B", "#4ECDC4" };
        AtomicInteger colorIndex = new AtomicInteger(0);

        return categoryTotals.entrySet().stream()
                .map(entry -> ExpenseByCategoryDTO.builder()
                        .category(entry.getKey())
                        .amount(entry.getValue())
                        .color(colors[colorIndex.getAndIncrement() % colors.length])
                        .build())
                .sorted((a, b) -> b.getAmount().compareTo(a.getAmount()))
                .collect(Collectors.toList());
    }

    public List<AlertDTO> getAlerts(LocalDate startDate, LocalDate endDate) {
        List<AlertDTO> alerts = new ArrayList<>();
        DashboardOverviewDTO overview = getOverview(startDate, endDate);

        if (overview.getMonthlyExpenses().compareTo(overview.getMonthlyIncome()) > 0) {
            alerts.add(AlertDTO.builder()
                    .type("SPENDING")
                    .message("Chi tiêu vượt quá thu nhập trong khoảng thời gian này")
                    .severity("ERROR")
                    .build());
        }

        if (overview.getSavingsRate() < 20) {
            alerts.add(AlertDTO.builder()
                    .type("SAVINGS")
                    .message("Tỷ lệ tiết kiệm dưới 20%. Cân nhắc giảm chi tiêu.")
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
