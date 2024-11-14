import React, { useEffect, useRef, useState } from 'react';
import { Chart, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, LineController } from 'chart.js';
import { getAllTransactions } from "../../services/api/TransactionsAPI.ts";

Chart.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    LineController,
    Title,
    Tooltip,
    Legend
);

interface FinanceChartProps {
    category: 'INCOME' | 'EXPENSE';
}

const FinanceChart: React.FC<FinanceChartProps> = ({ category }) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstanceRef = useRef<Chart | null>(null);

    const [chartData, setChartData] = useState({
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: category === 'INCOME' ? 'INCOME' : 'EXPENSE',
                data: [],
                borderColor: category === 'INCOME' ? 'rgba(75, 192, 192, 1)' : 'rgba(255, 99, 132, 1)',
                fill: false,
            }
        ]
    });

    useEffect(() => {
        const getTransactions = async () => {
            try {
                const data = await getAllTransactions();
                const weeklySums = [0, 0, 0, 0]; // Mảng để lưu tổng tiền cho từng tuần trong tháng

                data.forEach((transaction: { date: string; amount: number; type: string; }) => {
                    const transactionDate = new Date(transaction.date);
                    const startOfMonth = new Date(transactionDate.getFullYear(), transactionDate.getMonth(), 1);
                    const dayOfMonth = transactionDate.getDate();
                    const weekOfMonth = Math.floor((dayOfMonth - 1) / 7);

                    if (transaction.type === category) {
                        weeklySums[weekOfMonth] += transaction.amount;
                    }
                });

                // Cập nhật dữ liệu cho biểu đồ
                setChartData({
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    datasets: [
                        {
                            label: category === 'INCOME' ? 'INCOME' : 'EXPENSE',
                            data: weeklySums,
                            borderColor: category === 'INCOME' ? 'rgba(75, 192, 192, 1)' : 'rgba(255, 99, 132, 1)',
                            fill: false,
                        }
                    ]
                });
            } catch (error) {
                console.error("Error fetching transaction data", error);
            }
        };
        getTransactions();
    }, [category]); // Chỉ gọi lại khi `category` thay đổi

    useEffect(() => {
        // Đảm bảo rằng biểu đồ được tạo ra và cập nhật sau khi `chartData` thay đổi
        if (chartRef.current && chartData.datasets[0].data.length > 0) {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }

            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                chartInstanceRef.current = new Chart(ctx, {
                    type: 'line',
                    data: chartData,
                    options: {
                        responsive: true,
                        scales: {
                            x: {
                                type: 'category',
                                reverse: false,
                            },
                            y: {
                                type: 'linear',
                                beginAtZero: true,
                            }
                        },
                        animation: {
                            duration: 2000,
                            easing: 'easeInOutBounce',
                        },
                        plugins: {
                            tooltip: {
                                enabled: true,
                            }
                        }
                    }
                });
            }
        }

        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, [chartData]); // Chạy khi `chartData` thay đổi

    return (
        <div className="p-6 bg-white w-11/12 h-11/12">
            <canvas ref={chartRef} width="500" height="300"></canvas>
        </div>
    );
};

export default FinanceChart;
