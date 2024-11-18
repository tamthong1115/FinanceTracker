import React from 'react';
import {useFormik} from 'formik';
import {setRoleUser} from '../../services/api/AdminAPI.ts';

interface User {
    id: number;
    username: string;
    email: string;
    role: string;
    active: boolean;
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (user: User) => void;
    user: User;
}

export const SetRoleModal: React.FC<ModalProps> = ({isOpen, onClose, onSubmit, user}) => {
    const formik = useFormik({
        initialValues: {
            role: user.role,
        },
        onSubmit: async (values, {resetForm}) => {
            try {
                const newRole = await setRoleUser(user.id, values.role);
                if (newRole) {
                    onSubmit({...user, role: values.role});
                }
                resetForm();
                onClose();
            } catch (error) {
                console.log(error);
            }
        },
    });

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-40">
            <div className="bg-white w-1/4 h-auto rounded-2xl">
                <h2 className="text-xl w-full py-4 mb-4 text-center">Set new role</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-6 flex w-auto items-center justify-evenly">
                        <label className=" flex items-center w-auto text-gray-700">
                                User ID: {user.id}
                        </label>
                        <select
                            name="role"
                            value={formik.values.role}
                            onChange={formik.handleChange}
                            className="w-auto px-3 py-2  focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent rounded-md"
                            required
                        >
                            <option value="" disabled>Select type</option>
                            <option value="ROLE_ADMIN">Admin</option>
                            <option value="ROLE_USER">User</option>
                        </select>
                    </div>
                    <div className="flex justify-evenly w-full ">
                        <button type="button" onClick={onClose} className="w-1/2 py-4 hover:border-2 rounded-2xl hover:border-yellow-500 hover:bg-gray-100 transition duration-500 ">Cancel
                        </button>
                        <button type="submit" className="w-1/2 py-4 hover:border-2 rounded-2xl hover:border-green-500 hover:bg-gray-100 transition duration-500">Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
        ;
}