import React, { useEffect, useState } from 'react';
import FinanceChart from "../../components/Chart/FinanceChart.tsx";
import VerticalBarTransaction from "../../components/Chart/VerticalBarTransaction.tsx";
import { getAllTransactions, Transaction} from "../../services/api/TransactionsAPI.ts";

const DashboardTest: React.FC = () => {
    const [category, setCategory] = useState<'INCOME' | 'EXPENSE'>('INCOME');
    const [weeklyData, setWeeklyData] = useState([]);
    const [monthlyData, setMonthlyData] = useState([]);
    const [dataFetched, setDataFetched] = useState(false);

    const getWeek = (date: Date) => {
        const target = new Date(this.valueOf());
        const dayNr = (this.getDay() + 6) % 7;
        target.setDate(target.getDate() - dayNr + 3);
        const firstThursday = new Date(target.getFullYear(), 0, 4);
        const week = 1 + Math.round(((target.getTime() - firstThursday.getTime()) / 86400000 - 3 + (firstThursday.getDay() + 6) % 7) / 7);
        return week;
    };

    useEffect(() => {
        const getTopSpending = async () => {
            try {
                const data = await getAllTransactions();
                const weekly = [];
                const monthly: ((prevState: never[]) => never[]) | Transaction[] = [];

                const currentWeek = new Date().getWeek();
                const currentMonth = new Date().getMonth();

                data.forEach((transactions) => {
                    const transactionDate = new Date(transactions.date);
                    const transactionWeek = transactionDate.getWeek();
                    const transactionMonth = transactionDate.getMonth();

                    if (transactions.type === 'EXPENSE') {
                        if (transactionWeek === currentWeek) {
                            weekly.push(transactions);
                        }
                        if (transactionMonth === currentMonth) {
                            monthly.push(transactions);
                        }
                    }
                });
                setWeeklyData(weekly);
                setMonthlyData(monthly);
                setDataFetched(true);
            } catch (e) {
                console.log(e);
            }
        };
        if (!dataFetched) {
            getTopSpending();
        }
    }, [dataFetched]);

    const [topSpendingWeek, setTopSpendingWeek] = useState(true);
    const [spendingData, setSpendingData] = useState([]);
    const [totalAmount, setTotalAmount] = useState([0, 0]);

    const toggleCategory = (category: 'INCOME' | 'EXPENSE') => {
        setCategory(category);
        console.log(category);
    };

    const handleToggleSpendingPeriod = (isWeekly: boolean) => {
        setTopSpendingWeek(isWeekly);
        setSpendingData(isWeekly ? weeklyData : monthlyData);
    };

    useEffect(() => {
        const getTransactions = async () => {
            try {
                const data = await getAllTransactions();
                const totals = [0, 0];
                data.forEach((transaction: { amount: number; type: string; date: string; }) => {
                    if (transaction.type === 'INCOME' && new Date(transaction.date).getMonth() === new Date().getMonth()) {
                        totals[0] += transaction.amount;
                    } else if (transaction.type === 'EXPENSE' && new Date(transaction.date).getMonth() === new Date().getMonth()) {
                        totals[1] += transaction.amount;
                    }
                });
                setTotalAmount(totals);
            } catch (e) {
                console.log(e);
            }
        };
        getTransactions();
    }, []);

    return (
        <>
            <div className="rainbow-border-container mb-4 ml-9">
                <span className="rainbow-border-text">Report this month</span>
            </div>
            <div className="mx-auto w-full text-center justify-evenly flex">
                <div className={`w-6/12 h-auto rounded-2xl shadow-2xl flex flex-col justify-center items-center`}>
                    <h2 className="text-2xl font-bold my-4">Monthly Finance Overview</h2>
                    <div className="flex justify-around w-11/12">
                        <button
                            onClick={() => toggleCategory('INCOME')}
                            className={`px-7 flex-col flex justify-center py-2 w-1/2 ${category === 'INCOME' ? 'border-b-2 border-green-500' : ''}`}
                        >
                            <span className={`w-full text-center`}>
                                Total income
                            </span>
                            <span className={`text-center font-semibold w-full text-green-600`}>{totalAmount[0]}$</span>
                        </button>
                        <button
                            onClick={() => toggleCategory('EXPENSE')}
                            className={`px-7 flex flex-col py-2 w-1/2 ${category === 'EXPENSE' ? 'border-b-2 border-red-500' : ''}`}
                        >
                            <span className={`w-full text-center`}>
                                Total spent
                            </span>
                            <span className={`text-center font-semibold w-full text-red-600`}>
                                {totalAmount[1]}$
                            </span>
                        </button>
                    </div>
                    <FinanceChart category={category} />
                </div>
                <div className={`w-5/12 h-auto rounded-2xl shadow-2xl flex flex-col justify-center items-center `}>
                    <h2 className="text-2xl font-bold">Transaction Overview</h2>
                    <VerticalBarTransaction />
                </div>
            </div>
            <div className="rainbow-border-container ml-9 my-4">
                <span className="rainbow-border-text">Top spending</span>
            </div>
            <div
                className={`mx-auto w-[95%] h-auto pb-10 shadow-2xl bg-gray-700 rounded-lg text-center justify-center flex flex-col`}>
                <div className={`w-full flex justify-center`}>
                    <div className={`flex justify-evenly p-1 my-10 rounded-lg bg-gray-500 w-8/12 text-white`}>
                        <button
                            className={`w-1/2 rounded-lg ${topSpendingWeek ? 'bg-gray-400 text-white' : 'bg-none'}`}
                            onClick={() => {
                                setTopSpendingWeek(true);
                                handleToggleSpendingPeriod(true);
                            }}
                        >
                            Week
                        </button>
                        <button
                            className={`w-1/2 rounded-lg ${!topSpendingWeek ? 'bg-gray-400 text-white' : 'bg-none'}`}
                            onClick={() => {
                                setTopSpendingWeek(false);
                                handleToggleSpendingPeriod(false);
                            }}
                        >
                            Month
                        </button>
                    </div>
                </div>
                <div className={`w-full flex justify-center`}>
                    <div className="w-8/12 p-4 bg-white rounded-lg shadow-2xl ">
                        {spendingData.length === 0 && <span className={`text-gray-400`}>No transactions were carried out. </span>}
                        {spendingData.map((item, index) => (
                            <div key={index} className="items-center py-2 grid grid-cols-4 gap-4">
                                <div className="flex items-center justify-flex col-span-1">
                                    <img src="/img/icons8-transaction-100.png" className="h-12 w-12" alt="" />
                                    <div className="ml-4 flex flex-col text-left">
                                        <span className="text-xl">{item.category.name}</span>
                                        <span>{item.date}</span>
                                    </div>
                                </div>
                                <span className="col-span-2">{item.description}</span>
                                <div className="flex flex-col items-center col-span-1">
                                    <span>{item.paymentMethod}</span>
                                    <span>{item.amount}$</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardTest;