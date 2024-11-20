import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, Target } from "lucide-react";
import { useGoals } from "../../../hooks/useGoals";
import GoalFormModal from "./GoalFormModal";
import { Card } from "../../../components/common/ui/card";
import { Progress } from "../../../components/common/ui/progress";
import LoadingSpinner from "../../../components/common/LoadingSpinner";
import useDocumentTitle from '../../../hooks/useDocumentTitle';

interface Goal {
  id: number;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  color: string;
}

const SavingsGoals = () => {
  useDocumentTitle('Savings Goals');
  const {
    goals,
    loading,
    error,
    fetchGoals,
    createGoal,
    updateGoal,
    deleteGoal,
  } = useGoals();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);

  useEffect(() => {
    fetchGoals();
  }, [fetchGoals]);

  const handleSubmit = async (data: Omit<Goal, 'id'>) => {
    try {
      if (selectedGoal) {
        await updateGoal(selectedGoal.id, data);
      } else {
        await createGoal(data);
      }
      setIsModalOpen(false);
      setSelectedGoal(null);
    } catch (error) {
      console.error("Error saving goal:", error);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this goal?")) {
      try {
        await deleteGoal(id);
      } catch (error) {
        console.error("Error deleting goal:", error);
      }
    }
  };

  const calculateProgress = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  const getTimeRemaining = (deadline: string) => {
    const remaining = Math.ceil(
      (new Date(deadline).getTime() - new Date().getTime()) /
        (1000 * 60 * 60 * 24)
    );
    return remaining > 0 ? `${remaining} ngày` : "Đã hết hạn";
  };

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-red-500">Error loading goals: {error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Mục tiêu tiết kiệm</h2>
        <button
          onClick={() => {
            setSelectedGoal(null);
            setIsModalOpen(true);
          }}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-5 h-5 mr-2" />
          Thêm mục tiêu
        </button>
      </div>

      {loading && !goals.length ? (
        <div className="flex justify-center items-center h-64">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((goal) => (
            <Card key={goal.id} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <Target
                    className={`w-8 h-8 ${goal.color} text-white p-1.5 rounded-full mr-3`}
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{goal.name}</h3>
                    <p className="text-sm text-gray-500">
                      Còn {getTimeRemaining(goal.deadline)}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      setSelectedGoal(goal);
                      setIsModalOpen(true);
                    }}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(goal.id)}
                    className="text-gray-400 hover:text-red-600"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{formatCurrency(goal.currentAmount)}</span>
                    <span>{formatCurrency(goal.targetAmount)}</span>
                  </div>
                  <Progress
                    value={calculateProgress(
                      goal.currentAmount,
                      goal.targetAmount
                    )}
                    className="h-2"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    {calculateProgress(
                      goal.currentAmount,
                      goal.targetAmount
                    ).toFixed(1)}
                    % hoàn thành
                  </p>
                </div>

                <div className="pt-4 border-t grid grid-cols-2 gap-4">
                  <button
                    onClick={() => {
                      setSelectedGoal({
                        ...goal,
                        currentAmount: goal.currentAmount + 1000000,
                      });
                      setIsModalOpen(true);
                    }}
                    className="px-3 py-2 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100"
                  >
                    Thêm tiền
                  </button>
                  <button
                    onClick={() => {
                      setSelectedGoal(goal);
                      setIsModalOpen(true);
                    }}
                    className="px-3 py-2 text-sm bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100"
                  >
                    Điều chỉnh
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {isModalOpen && (
        <GoalFormModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedGoal(null);
          }}
          onSubmit={handleSubmit}
          initialData={selectedGoal}
        />
      )}
    </div>
  );
};

export default SavingsGoals;
