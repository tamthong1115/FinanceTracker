import {useState, useEffect} from 'react';
import {getAllUsers, lockUser} from '../../services/api/AdminAPI.ts';
import {SetRoleModal} from "../../components/Modal/SetRoleModal.tsx";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface User {
    id: number;
    username: string;
    email: string;
    role: string;
    active: boolean;
}

export const UserManager = () => {
    const [userData, setUserData] = useState<User[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const userPerPages = 10;
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllUsers();
                const mappedData = data.map(user => ({ ...user, active: true })); // Assuming all users are active
                setUserData(mappedData);
                console.log(mappedData);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const totalPages = Math.ceil(userData.length / userPerPages);
    const indexOfLastUser = currentPage * userPerPages;
    const indexOfFirstUser = indexOfLastUser - userPerPages;
    const currentData = userData.slice(indexOfFirstUser, indexOfLastUser);
    const handleChangPages = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    }

    const handdleDeleteUser = async (id: number) => {
        if (window.confirm("Bạn có chắc muốn xóa người dùng này?")) {
            try {
                await lockUser(id);
                setUserData(prevUsers => prevUsers.filter(user => user.id !== id));
            } catch (e) {
                console.log(e);
            }
        }
    }

    const handdleSetRole = () => {
        toast.success("Cập nhật vai trò thành công!");
        toast.info("Trang sẽ tự động tải lại sau 3 giây");
        setTimeout(() => {
            window.location.reload();
        }, 4000);
    }

    return (
        <div className="user-manage">
            <table className="min-w-full table-fixed divide-y divide-gray-200 overflow-x-auto">
                <thead className="bg-gray-50">
                <tr>
                    <th scope="col"
                        className="px-6 py-3 w-auto text-center text-xs font-medium text-gray-500 uppercase tracking-wider"> ID
                    </th>
                    <th scope="col"
                        className="px-6 py-3 w-auto text-center text-xs font-medium text-gray-500 uppercase tracking-wider"> Name
                    </th>
                    <th scope="col"
                        className="px-6 py-3 w-auto text-center text-xs font-medium text-gray-500 uppercase tracking-wider"> Email
                    </th>
                    <th scope="col"
                        className="px-6 py-3 w-auto text-center text-xs font-medium text-gray-500 uppercase tracking-wider"> Role
                    </th>
                    <th scope="col"
                        className="px-6 py-3 w-auto text-center text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 overflow-auto min-w-full">
                {currentData.map(user => (
                    user.active ? (
                        <tr key={user.id}>

                            <td className="px-6 py-2 w-auto text-center ">
                                <div className="text-sm font-medium text-gray-900">{user.id}</div>
                            </td>

                            <td className="px-3 py-2 w-auto whitespace-nowrap">
                                <div
                                    className={`flex items-center w-full  text-center text-sm font-medium text-gray-900 h-full justify-center`}>
                                    {user.username}
                                </div>
                            </td>
                            <td className="px-6 py-2 w-auto whitespace-nowrap text-center text-sm text-gray-500">{user.email}</td>
                            <td className="px-6 py-2 w-auto  whitespace-nowrap text-center">
                                        <span
                                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                             {user.role === 'ROLE_ADMIN' ? null : 'user'}
                                        </span>
                            </td>
                            <td className=" px-6 py-2 w-auto justify-evenly flex text-sm font-medium">
                                <img src="/img/icons8-settings-100.png"
                                     onClick={() => setIsModalOpen(true)}
                                     className={`w-8 h-8 p-1 bg-amber-200 rounded-full hover:cursor-pointer hover:scale-110`}
                                     alt=""/>
                                <SetRoleModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handdleSetRole} user={user} />

                                <img src="/img/icons8-delete-100.png"
                                     onClick={() =>
                                        user.role === "ROLE_ADMIN" ? null :
                                         handdleDeleteUser(user.id)
                                }
                                     className={`w-8 h-8 p-1 ${user.role === "ROLE_ADMIN" ? 'bg-gray-400 hove:none' : 'bg-red-500 hover:cursor-pointer hover:scale-110'} rounded-full `}
                                     alt=""/>
                            </td>
                        </tr>
                    ) : null
                ))}
                </tbody>
            </table>
            <div className="flex justify-center mt-4">
                <button disabled={currentPage === 1} onClick={() => handleChangPages(currentPage - 1)}
                        className="px-4 py-2 mx-1 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300">&lt;</button>
                {[...Array(totalPages)].map((_, index) => (
                    <button key={index} onClick={() => handleChangPages(index + 1)}
                            className={`px-4 py-2 mx-1 rounded-full ${currentPage === index + 1 ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                        {index + 1}
                    </button>
                ))}
                <button disabled={currentPage === totalPages} onClick={() => handleChangPages(currentPage + 1)}
                        className="px-4 py-2 mx-1 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300">&gt;</button>
            </div>
        </div>
    );
}
