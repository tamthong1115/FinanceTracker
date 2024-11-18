import React from 'react';
import { useFormik } from 'formik';
import { addCategory } from '../../services/api/AdminAPI.ts';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (category: { id: number; name: string; type: string }) => void;
}

export const AddNewCategory: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            type: '',
        },
        onSubmit: async (values, { resetForm }) => {
            try {
                const newCategory = await addCategory(values);
                onSubmit(newCategory);
                resetForm();
                onClose();
            } catch (error) {
                console.log(error);
            }
        },
    });

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gradient-to-b from-white to-gray-400 w-1/3 h-auto p-6 rounded-lg">
                <h2 className="text-xl mb-4 text-center font-semibold">Thêm danh mục</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-4 flex w-full items-center">
                        <label className="text-gray-900 font-semibold text-xl">Tên: </label>
                        <input
                            type="text"
                            name="name"
                            placeholder={`Nhập tên danh mục`}
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            className="px-3 py-2 border-b-2 w-11/12 focus:outline-none bg-transparent"
                            required
                        />
                    </div>
                    <div className="mb-4 flex w-full items-center">
                        <label className="text-gray-900 font-semibold text-xl">Loại : </label>
                        <select
                            name="type"
                            value={formik.values.type}
                            onChange={formik.handleChange}
                            className="px-3 py-2 rounded w-10/12 outline-none bg-transparent   "
                            required
                        >
                            <option value="" disabled>Chọn loại danh mục</option>
                            <option value="income">Thu nhập</option>
                            <option value="expense">Chi tiêu</option>
                        </select>
                    </div>
                    <div className="flex justify-evenly items-center mt-4">
                        <button type="button" onClick={onClose} className=" w-1/2 rounded p-2 hover:border-2  hover:border-b-violet-700 hover:text-white hover:border-transparent">Cancel</button>
                        <button type="submit" className="w-1/2 rounded p-2 hover:border-2 hover:border-double hover:border-b-lime-400 hover:text-white   hover:border-transparent">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
}