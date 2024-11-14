import React, {useEffect, useRef, useState} from 'react';
import {Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, BarController} from 'chart.js';
import {getAllTransactions} from "../../services/api/TransactionsAPI.ts";

Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    BarController,
    Title,
    Tooltip,
    Legend
);

const VerticalBarTransaction: React.FC = () => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstanceRef = useRef<Chart | null>(null);

    const [isWeekly, setIsWeekly] = useState(true);
    const [totalAmount, setTotalAmount] = useState(0);
    const [weekTransactions, setWeekTransactions] = useState({
        lastWeek: 0,
        thisWeek: 0,
    });
    const [monthTransactions, setMonthTransactions] = useState({
        lastMonth: 0,
        thisMonth: 0,
    });

    const weeklyLabels = ['Last Week', 'This Week'];
    const monthlyLabels = ['Last Month', 'This Month'];

    const [transactions, setTransactions] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllTransactions();
                setTransactions(response);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const getWeekRange = (currentDate: Date) => {
            const sundayThisWeek = new Date(currentDate);
            sundayThisWeek.setDate(currentDate.getDate() - currentDate.getDay());

            const sundayLastWeek = new Date(sundayThisWeek);
            sundayLastWeek.setDate(sundayThisWeek.getDate() - 7);

            return {sundayThisWeek, sundayLastWeek};
        };

        const filterAndSumTransactions = () => {
            const weekTransactions = {
                lastWeek: 0,
                thisWeek: 0,
            };
            const monthTransactions = {
                lastMonth: 0,
                thisMonth: 0,
            };

            const {sundayThisWeek, sundayLastWeek} = getWeekRange(new Date());

            transactions.forEach((transaction: { amount: number; type: string; date: string }) => {
                if (transaction.type === 'EXPENSE') {
                    const transactionDate = new Date(transaction.date);

                    if (transactionDate >= sundayThisWeek && transactionDate <= new Date(sundayThisWeek.getTime() + 6 * 24 * 60 * 60 * 1000)) {
                        weekTransactions.thisWeek += transaction.amount;
                        console.log(`This Week Transaction: ${transaction.amount} on ${transactionDate.toLocaleDateString()}`);

                } else if (transactionDate >= sundayLastWeek && transactionDate <= new Date(sundayLastWeek.getTime() + 6 * 24 * 60 * 60 * 1000)) {
                    weekTransactions.lastWeek += transaction.amount;
                    console.log(`Last Week Transaction: ${transaction.amount} on ${transactionDate.toLocaleDateString()}`);
                }

                if (transactionDate.getMonth() === new Date().getMonth()) {
                    monthTransactions.thisMonth += transaction.amount;
                } else if (transactionDate.getMonth() === new Date().getMonth() - 1) {
                    monthTransactions.lastMonth += transaction.amount;
                }
            }
        }
    )
        ;

        // Set state for week and month transactions
        setWeekTransactions(weekTransactions);
        setMonthTransactions(monthTransactions);

        if (isWeekly) {
            setTotalAmount(weekTransactions.lastWeek + weekTransactions.thisWeek);
        } else {
            setTotalAmount(monthTransactions.lastMonth + monthTransactions.thisMonth);
        }
    };

    filterAndSumTransactions();
}, [transactions, isWeekly]
)
;

const chartData = {
    labels: isWeekly ? weeklyLabels : monthlyLabels,
    datasets: [
        {
            label: 'Transaction Amount',
            data: isWeekly
                ? [weekTransactions.lastWeek, weekTransactions.thisWeek]
                : [monthTransactions.lastMonth, monthTransactions.thisMonth],
            backgroundColor: isWeekly
                ? 'rgba(75, 192, 192, 0.6)'
                : 'rgba(255, 99, 132, 0.6)',
            barThickness: 50,
            borderRadius: 10,
            animation: {
                duration: 1500,
                easing: 'easeInOutQuart'
            }
        }
    ]
};

useEffect(() => {
    if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
    }

    if (chartRef.current) {
        const ctx = chartRef.current.getContext('2d');
        if (ctx) {
            chartInstanceRef.current = new Chart(ctx, {
                type: 'bar',
                data: chartData,
                options: {
                    responsive: true,
                    scales: {
                        x: {type: 'category'},
                        y: {type: 'linear', beginAtZero: true}
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
}, [isWeekly, transactions, weekTransactions, monthTransactions]);

return (
    <div className="p-6 bg-white w-11/12 h-11/12">
        <div className={`w-full p-1 mb-2 bg-gray-100 flex rounded-lg justify-evenly`}>
            <button
                onClick={() => setIsWeekly(true)}
                className={`w-1/2 rounded ${isWeekly ? 'bg-gray-400 text-white' : 'bg-none'}`}
            >
                Weekly
            </button>
            <button
                onClick={() => setIsWeekly(false)}
                className={`w-1/2 rounded ${!isWeekly ? 'bg-gray-400 text-white' : 'bg-none'}`}
            >
                Monthly
            </button>
        </div>
        <div className={`text-right flex flex-col  `}>
            <span className={`font-sans font-semibold text-3xl`}>
                {isWeekly ? weekTransactions.thisWeek : monthTransactions.thisMonth}$
            </span>
            <span className={`font-normal text-xs `}>
                    {isWeekly ? 'Total spent this week' : 'Total spent this month'}
                </span>
        </div>
        <canvas ref={chartRef} width="500" height="300"></canvas>
    </div>
);
}
;

export default VerticalBarTransaction;
