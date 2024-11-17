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
                const weeklySums = [0, 0, 0, 0];

                data.forEach((transaction: { date: string; amount: number; type: string; }) => {
                    const transactionDate = new Date(transaction.date);
                    const startOfMonth = new Date(transactionDate.getFullYear(), transactionDate.getMonth(), 1);
                    const dayOfMonth = transactionDate.getDate();
                    const weekOfMonth = Math.floor((dayOfMonth - 1) / 7);

                    if (transaction.type === category) {
                        weeklySums[weekOfMonth] += transaction.amount;
                    }
                });

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
    }, [category]);

    useEffect(() => {
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
    }, [chartData]);

    return (
        <div className="p-6 bg-white w-11/12 h-11/12">
            <canvas ref={chartRef} width="auto" height="auto"></canvas>
        </div>
    );
};

export default FinanceChart;
