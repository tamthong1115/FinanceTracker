import { useState } from "react";
import { Download, FileText, FileSpreadsheet, Loader2 } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import * as XLSX from "xlsx";

const ReportExporter = ({ dashboardRef, data, period }) => {
  const [isExporting, setIsExporting] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  const handleExportPDF = async () => {
    try {
      setIsExporting(true);
      setShowOptions(false); // Hide options before taking screenshot

      // Wait for options menu to disappear
      await new Promise((resolve) => setTimeout(resolve, 100));

      const element = dashboardRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
        x: 0,
        y: 0,
        width: element.scrollWidth,
        height: element.scrollHeight,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [canvas.width, canvas.height],
      });

      // Add title and date range
      pdf.setFontSize(20);
      pdf.text("Báo cáo tài chính", 40, 40);
      pdf.setFontSize(12);
      pdf.text(`Từ: ${period.startDate.toLocaleDateString("vi-VN")}`, 40, 60);
      pdf.text(`Đến: ${period.endDate.toLocaleDateString("vi-VN")}`, 40, 75);

      // Add the dashboard screenshot
      pdf.addImage(imgData, "PNG", 0, 100);

      pdf.save("finance-report.pdf");
    } catch (error) {
      console.error("Error exporting PDF:", error);
    } finally {
      setIsExporting(false);
      setShowOptions(false);
    }
  };

  const handleExportExcel = () => {
    try {
      setIsExporting(true);

      // Prepare data for Excel
      const workbook = XLSX.utils.book_new();

      // Overview sheet
      const overviewData = [
        ["Tổng quan tài chính"],
        [
          "Khoảng thời gian",
          `${period.startDate.toLocaleDateString(
            "vi-VN"
          )} - ${period.endDate.toLocaleDateString("vi-VN")}`,
        ],
        [""],
        ["Chỉ số", "Giá trị"],
        ["Tổng số dư", formatCurrency(data.overview.totalBalance)],
        ["Thu nhập", formatCurrency(data.overview.monthlyIncome)],
        ["Chi tiêu", formatCurrency(data.overview.monthlyExpenses)],
        ["Tỷ lệ tiết kiệm", `${data.overview.savingsRate.toFixed(1)}%`],
      ];
      const overviewSheet = XLSX.utils.aoa_to_sheet(overviewData);
      XLSX.utils.book_append_sheet(workbook, overviewSheet, "Tổng quan");

      // Transactions by category sheet
      const categoryData = [
        ["Chi tiêu theo danh mục"],
        [""],
        ["Danh mục", "Số tiền", "Tỷ lệ"],
      ];
      data.expensesByCategory.forEach((cat) => {
        categoryData.push([
          cat.category,
          cat.amount,
          `${((cat.amount / data.overview.monthlyExpenses) * 100).toFixed(1)}%`,
        ]);
      });
      const categorySheet = XLSX.utils.aoa_to_sheet(categoryData);
      XLSX.utils.book_append_sheet(workbook, categorySheet, "Danh mục");

      // Monthly trends sheet
      const trendsData = [
        ["Xu hướng theo tháng"],
        [""],
        ["Tháng", "Thu nhập", "Chi tiêu"],
      ];
      data.trends.forEach((trend) => {
        trendsData.push([trend.month, trend.income, trend.expenses]);
      });
      const trendsSheet = XLSX.utils.aoa_to_sheet(trendsData);
      XLSX.utils.book_append_sheet(workbook, trendsSheet, "Xu hướng");

      // Save file
      XLSX.writeFile(workbook, "finance-report.xlsx");
    } catch (error) {
      console.error("Error exporting Excel:", error);
    } finally {
      setIsExporting(false);
      setShowOptions(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100"
        disabled={isExporting}
      >
        {isExporting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Đang xuất...</span>
          </>
        ) : (
          <>
            <Download className="w-4 h-4" />
            <span>Xuất báo cáo</span>
          </>
        )}
      </button>

      {showOptions && !isExporting && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border p-2 min-w-[200px] z-50">
          <button
            onClick={handleExportPDF}
            className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md"
          >
            <FileText className="w-4 h-4" />
            <span>Xuất PDF</span>
          </button>
          <button
            onClick={handleExportExcel}
            className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md"
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>Xuất Excel</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ReportExporter;
