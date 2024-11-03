export interface Goal {
  id: number;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  color: string;
}

export interface GoalFormData {
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  color: string;
}

export type CreateGoalRequest = Omit<GoalFormData, "currentAmount">;
export type UpdateGoalRequest = Partial<GoalFormData>;
