import { useState, RefObject } from "react";
import { Download, FileText, FileSpreadsheet, Loader2 } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import XLSX from 'xlsx-js-style';

interface DashboardData {
  overview: {
    totalBalance: number;
    monthlyIncome: number;
    monthlyExpenses: number;
    savingsRate: number;
  };
  expensesByCategory: Array<{
    category: string;
    amount: number;
  }>;
  trends: Array<{
    month: string;
    income: number;
    expenses: number;
  }>;
}

interface Period {
  startDate: Date;
  endDate: Date;
}

interface ReportExporterProps {
  dashboardRef: RefObject<HTMLDivElement>;
  data: DashboardData;
  period: Period;
}

const ReportExporter = ({ dashboardRef, data, period }: ReportExporterProps) => {
  const [isExporting, setIsExporting] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  const handleExportPDF = async () => {
    if (!dashboardRef.current) return;
    
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

      const headerStyle = {
        font: { bold: true, color: { rgb: "FFFFFF" } },
        fill: { fgColor: { rgb: "4F46E5" } },
        alignment: { horizontal: "center", vertical: "center" }
      };

      const subHeaderStyle = {
        font: { bold: true },
        fill: { fgColor: { rgb: "F3F4F6" } }
      };

      // Create workbook
      const workbook = XLSX.utils.book_new();

      // Overview sheet with styling
      const overviewData = [
        [{ v: "Tổng quan tài chính", s: headerStyle }],
        [
          { v: "Khoảng thời gian", s: subHeaderStyle },
          { 
            v: `${period.startDate.toLocaleDateString("vi-VN")} - ${period.endDate.toLocaleDateString("vi-VN")}`,
            s: { alignment: { horizontal: "left" } }
          }
        ],
        [{ v: "" }],
        [
          { v: "Chỉ số", s: subHeaderStyle },
          { v: "Giá trị", s: subHeaderStyle }
        ],
        [
          { v: "Tổng số dư", s: { font: { bold: true } } },
          { v: formatCurrency(data.overview.totalBalance), s: { alignment: { horizontal: "right" } } }
        ],
        [
          { v: "Thu nhập", s: { font: { bold: true } } },
          { v: formatCurrency(data.overview.monthlyIncome), s: { alignment: { horizontal: "right" } } }
        ],
        [
          { v: "Chi tiêu", s: { font: { bold: true } } },
          { v: formatCurrency(data.overview.monthlyExpenses), s: { alignment: { horizontal: "right" } } }
        ],
        [
          { v: "Tỷ lệ tiết kiệm", s: { font: { bold: true } } },
          { v: `${data.overview.savingsRate.toFixed(1)}%`, s: { alignment: { horizontal: "right" } } }
        ]
      ];
      const overviewSheet = XLSX.utils.aoa_to_sheet(overviewData);
      XLSX.utils.book_append_sheet(workbook, overviewSheet, "Tổng quan");

      // Category sheet with styling
      const categoryData = [
        [{ v: "Chi tiêu theo danh mục", s: headerStyle }],
        [{ v: "" }],
        [
          { v: "Danh mục", s: subHeaderStyle },
          { v: "Số tiền", s: subHeaderStyle },
          { v: "Tỷ lệ", s: subHeaderStyle }
        ],
        ...data.expensesByCategory.map(cat => [
          { v: cat.category },
          { v: formatCurrency(cat.amount), s: { alignment: { horizontal: "right" } } },
          { 
            v: `${((cat.amount / data.overview.monthlyExpenses) * 100).toFixed(1)}%`,
            s: { alignment: { horizontal: "right" } }
          }
        ])
      ];
      const categorySheet = XLSX.utils.aoa_to_sheet(categoryData);
      XLSX.utils.book_append_sheet(workbook, categorySheet, "Danh mục");

      // Trends sheet with styling
      const trendsData = [
        [{ v: "Xu hướng theo tháng", s: headerStyle }],
        [{ v: "" }],
        [
          { v: "Tháng", s: subHeaderStyle },
          { v: "Thu nhập", s: subHeaderStyle },
          { v: "Chi tiêu", s: subHeaderStyle }
        ],
        ...data.trends.map(trend => [
          { v: trend.month },
          { v: formatCurrency(trend.income), s: { alignment: { horizontal: "right" } } },
          { v: formatCurrency(trend.expenses), s: { alignment: { horizontal: "right" } } }
        ])
      ];
      const trendsSheet = XLSX.utils.aoa_to_sheet(trendsData);
      XLSX.utils.book_append_sheet(workbook, trendsSheet, "Xu hướng");

      // Auto-size columns for all sheets
      const sheets = ["Tổng quan", "Danh mục", "Xu hướng"];
      sheets.forEach(sheet => {
        const worksheet = workbook.Sheets[sheet];
        const cols = [];
        for (let i = 0; i < 5; i++) {
          cols.push({ wch: 20 }); // Set width to 20 characters
        }
        worksheet["!cols"] = cols;
      });

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
