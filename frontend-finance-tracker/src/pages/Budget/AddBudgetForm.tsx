import React, {useEffect, useState} from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {Category, getAllCategories} from "../../services/api/CategoryAPI";
import {createBudget, CreateBudgetDTO} from "../../services/api/BudgetAPI";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    height: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

interface AddBudgetFormProps {
    open: boolean;
    handleClose: () => void;
}

const AddBudgetForm: React.FC<AddBudgetFormProps> = ({open, handleClose}) => {
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState(new Date());
    const [repeat, setRepeat] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async ()  => {
      const data = await getAllCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);
    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(event.target.value);
    };

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(parseInt(event.target.value, 10) || 0);
    };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(new Date(event.target.value));
  };

    const handleRepeatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRepeat(event.target.checked);
    };


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newBudget: CreateBudgetDTO = {
        categoryId: categories.find((cat) => cat.name === category)?.id || 0,
        amount,
        startDate: date.toISOString(),
        endDate: date.toISOString(),
        isLoop: repeat,
        };
    await createBudget(newBudget);
    handleClose();
  };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <form onSubmit={handleSubmit} className="bg-gradient-to-r from-amber-200 to-violet-300 rounded-md p-4 w-full h-full">
                    <h1 className={`font-bold font-sm text-center w-full text-2xl mb-4`}>Create new budget</h1>
                    <div className="flex items-center justify-between mb-4">
                        <label htmlFor="category" className="text-lg font-medium w-1/2">Select category:</label>
                        <select id="category" value={category} onChange={handleCategoryChange}
                                className="rounded-lg w-1/2 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Select a category</option>
                          {categories.map((cat) => (
                              <option key={cat.id} value={cat.name}>{cat.name}</option>
                          ))}                        </select>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                        <label htmlFor="amount" className="text-lg font-medium w-1/2">Amount (VND):</label>
                        <input
                            type="number"
                            id="amount"
                            value={amount}
                            onChange={handleAmountChange}
                            className=" rounded-md w-1/2 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                  <div className="flex items-center justify-between mb-4">
                    <label htmlFor="date" className="text-lg font-medium w-1/2">Date:</label>
                    <input
                        type="date"
                        id="date"
                        value={date.toISOString().split('T')[0]}
                        onChange={handleDateChange}
                        className="w-1/2 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        id="repeat"
                        checked={repeat}
                            onChange={handleRepeatChange}
                            className="mr-2"
                        />
                        <label htmlFor="repeat" className="text-lg font-medium">Repeat this budget</label>

                    </div>
                    <button type="submit" className="bg-gradient-to-b from-cyan-200 to-red-300 w-3/4 ml-10 mt-10 text-gray-900 rounded-md px-4 py-2 transition duration-500 hover:scale-110 hover:text-white hover:bg-gradient-to-r hover:from-gray-700 hover:to-emerald-700 ">Add
                        Budget
                    </button>
                </form>
            </Box>
        </Modal>
    );
};

export default AddBudgetForm;