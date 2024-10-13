import {BarChart, Download, PieChart} from "lucide-react";

const Reports = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Báo cáo tài chính</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-md">
                    <h3 className="text-lg font-semibold mb-2">Thu chi theo thời gian</h3>
                    <BarChart size={200} className="mx-auto"/>
                    <button
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md flex items-center justify-center w-full">
                        <Download size={20} className="mr-2"/>
                        Tải xuống
                    </button>
                </div>
                <div className="p-4 border rounded-md">
                    <h3 className="text-lg font-semibold mb-2">Chi tiêu theo danh mục</h3>
                    <PieChart size={200} className="mx-auto"/>
                    <button
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md flex items-center justify-center w-full">
                        <Download size={20} className="mr-2"/>
                        Tải xuống
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Reports;