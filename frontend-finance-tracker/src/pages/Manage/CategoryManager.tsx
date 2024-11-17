import {useState,useEffect} from 'react';
import {getAllCategories} from '../../services/api/AdminAPI.ts';

interface Category {
    id: number;
    name: string;
    type: string;
}
export const CategoryManager = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const userPerPages = 10;

    const getAllCategories = async () => {
        try{
            const data = await getAllCategories();
            setCategories(data);
        }catch (error){
            console.log(error);
        }
    }

    useEffect(() => {
        getAllCategories().then(r => r);
    }, []);

    const totalPages = Math.ceil(categories.length / userPerPages);
    const indexOfLastUser = currentPage * userPerPages;
    const indexOfFirstUser = indexOfLastUser - userPerPages;
    const currentData = categories.slice(indexOfFirstUser, indexOfLastUser);
    const handleChangPages = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    }

    return (
        <div>

            <div>
                <table className="min-w-full table-fixed divide-y divide-gray-200 overflow-x-auto">
                    <thead className="bg-gray-50">
                    <tr>
                        <th scope="col"
                            className="px-6 py-3 w-1/5 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"> ID
                        </th>
                        <th scope="col"
                            className="px-6 py-3 w-1/5 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"> Name
                        </th>
                        <th scope="col"
                            className="px-6 py-3 w-1/5 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"> Type
                        </th>
                        <th scope="col"
                            className="px-6 py-3 w-1/5 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 overflow-auto min-w-full">
                    {currentData.map(category => (
                        <tr key={category.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-center">{category.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">{category.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">{category.type}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700">Edit</button>
                                <button className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-700">Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
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
};
