import React, { useState } from "react";
import { Upload, CheckCircle, AlertCircle, X } from "lucide-react";
import Papa from "papaparse";
import { Card } from "../../../components/common/ui/card";

const TransactionImport = ({ onImport, onClose }) => {
  const [file, setFile] = useState(null);
  const [previewData, setPreviewData] = useState([]);
  const [error, setError] = useState("");
  const [importing, setImporting] = useState(false);

  const handleFileDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    handleFile(droppedFile);
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    handleFile(selectedFile);
  };

  const handleFile = (file) => {
    if (!file) return;

    if (!file.name.endsWith(".csv")) {
      setError("Please upload a CSV file");
      return;
    }

    setFile(file);
    setError("");

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      preview: 5, // Preview first 5 rows
      complete: function (results) {
        // Validate required columns
        const requiredColumns = [
          "date",
          "amount",
          "description",
          "category",
          "type",
        ];
        const hasRequiredColumns = requiredColumns.every((col) =>
          results.meta.fields.includes(col)
        );

        if (!hasRequiredColumns) {
          setError(
            "CSV file must contain the following columns: date, amount, description, category, type"
          );
          return;
        }

        setPreviewData(results.data);
      },
      error: function (error) {
        setError("Error parsing CSV file: " + error.message);
      },
    });
  };

  const handleImport = async () => {
    try {
      setImporting(true);

      // Parse full file
      const parsePromise = new Promise((resolve, reject) => {
        Papa.parse(file, {
          header: true,
          skipEmptyLines: true,
          complete: resolve,
          error: reject,
        });
      });

      const results = await parsePromise;

      // Transform data to match your transaction format
      const transformedData = results.data.map((row) => ({
        date: row.date,
        amount: parseFloat(row.amount),
        description: row.description,
        category: row.category,
        type: row.type.toUpperCase(),
        paymentMethod: row.paymentMethod || "CASH",
        notes: row.notes || "",
      }));

      await onImport(transformedData);
      onClose();
    } catch (error) {
      setError("Error importing transactions: " + error.message);
    } finally {
      setImporting(false);
    }
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Import Transactions</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={20} />
        </button>
      </div>

      {/* Drop Zone */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleFileDrop}
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors"
      >
        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 mb-2">Drop your CSV file here or</p>
        <label className="inline-block">
          <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-md cursor-pointer hover:bg-blue-100">
            Browse files
          </span>
          <input
            type="file"
            accept=".csv"
            className="hidden"
            onChange={handleFileSelect}
          />
        </label>
        <p className="text-sm text-gray-500 mt-2">
          File must be in CSV format with columns: date, amount, description,
          category, type
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-md flex items-center gap-2">
          <AlertCircle className="w-5 h-5" />
          <span>{error}</span>
        </div>
      )}

      {/* Preview */}
      {previewData.length > 0 && !error && (
        <div className="mt-6">
          <h4 className="font-medium mb-2">Preview (First 5 rows)</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {Object.keys(previewData[0]).map((header) => (
                    <th
                      key={header}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {previewData.map((row, i) => (
                  <tr key={i}>
                    {Object.values(row).map((cell, j) => (
                      <td
                        key={j}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-end gap-3 mt-6">
        <button
          onClick={onClose}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          onClick={handleImport}
          disabled={!file || error || importing}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-md
            ${
              !file || error || importing
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
        >
          {importing ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
              Importing...
            </>
          ) : (
            <>
              <CheckCircle className="w-4 h-4" />
              Import
            </>
          )}
        </button>
      </div>
    </Card>
  );
};

export default TransactionImport;
