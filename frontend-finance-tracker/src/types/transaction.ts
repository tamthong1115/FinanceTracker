export interface Transaction {
  id: number;
  amount: number;
  description: string;
  category: string;
  type: "INCOME" | "EXPENSE";
  date: string;
  paymentMethod: string;
  status: "COMPLETED" | "PENDING" | "CANCELLED";
  attachments?: string[];
  notes?: string;
  tags?: string[];
  recurrent?: boolean;
  recurrentPeriod?: "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY";
}

export interface TransactionFormData {
  amount: number;
  description: string;
  categoryId: number;
  accountId: number;
  type: "INCOME" | "EXPENSE";
  date: string;
  paymentMethod: string;
  notes?: string;
  tags?: string[];
  recurrent?: boolean;
  recurrentPeriod?: "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY";
}
