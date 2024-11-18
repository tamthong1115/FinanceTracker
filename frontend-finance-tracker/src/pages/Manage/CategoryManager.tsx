import {useState, useEffect} from 'react';
import {deleteCategory, getAllCategories} from '../../services/api/AdminAPI.ts';
import {AddNewCategory} from "../../components/Modal/AddNewCategory.tsx";

interface Category {
    id: number;
    name: string;
    type: string;
}

export const CategoryManager = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const userPerPages = 20;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllCategories();
                setCategories(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);


    const totalPages = Math.ceil(categories.length / userPerPages);
    const indexOfLastUser = currentPage * userPerPages;
    const indexOfFirstUser = indexOfLastUser - userPerPages;
    const currentData = categories.slice(indexOfFirstUser, indexOfLastUser);
    const handleChangPages = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    }

    const handdleDeleteCategory = async (id: number) => {
        if (window.confirm("Bạn có chắc muốn xóa danh mục này?")) {
            try {
                await deleteCategory(id);
                setCategories(prevCategories => prevCategories.filter(category => category.id !== id));
            } catch (error) {
                console.log(error);
            }
        }
    }

    const handleAddCategory = (category: { name: string; type: string }) => {
        setCategories([...categories, {id: categories.length + 1, ...category}]);
    }

    return (
        <div>
            <img src="/img/icons8-add-100.png"
                 className={`w-12 h-12 hover:cursor-pointer hover:scale-110 transition duration-500`}
                 onClick={() => setIsModalOpen(true)} alt=""/>
            <AddNewCategory isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleAddCategory}/>
            <div className={`grid grid-cols-5 gap-5`}>
                {currentData.map(category => (
                    <div key={category.id}>
                        <div className="flex justify-between my-2 flex-col p-4 rounded-2xl shadow-2xl ">
                            <div className={`flex justify-between items-center`}>
                                    <span>
                                        <b>ID:</b> {category.id}
                                    </span>
                                <img src="/img/icons8-delete-100.png" className={`w-4 h-4 hover:cursor-pointer`}
                                     onClick={() =>
                                         handdleDeleteCategory(category.id)
                                     } alt=""/>
                            </div>
                            <div><b>Tên:</b> {category.name}</div>
                            <div><b>Loại:</b> {category.type}</div>
                        </div>
                        <hr/>
                    </div>
                ))}
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
