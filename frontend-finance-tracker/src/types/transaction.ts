export type TransactionType = "INCOME" | "EXPENSE";
export type TransactionStatus = "COMPLETED" | "PENDING" | "CANCELLED";
export type RecurrentPeriod = "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY";

export interface Transaction {
  id: number;
  amount: number;
  description: string;
  category: string;
  type: TransactionType;
  date: string;
  paymentMethod: string;
  status: TransactionStatus;
  attachments?: string[];
  notes?: string;
  tags?: string[];
  recurrent?: boolean;
  recurrentPeriod?: RecurrentPeriod;
  userId: number;
  createdAt: string;
  updatedAt: string;
}

export interface TransactionFormData {
  type: TransactionType;
  amount: number;
  description: string;
  category: string;
  date: string;
  paymentMethod: string;
  status?: TransactionStatus;
  notes?: string;
  tags?: string[];
  recurrent?: boolean;
  recurrentPeriod?: RecurrentPeriod;
}
