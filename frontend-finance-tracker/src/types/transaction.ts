export type TransactionType = 'EXPENSE' | 'INCOME';
export type TransactionStatus = 'COMPLETED' | 'PENDING' | 'CANCELLED';

export interface Transaction {
  id: number;
  date: string;
  amount: number;
  description: string;
  category: string;
  type: TransactionType;
  paymentMethod: string;
  status: TransactionStatus;
  notes?: string;
}

export interface TransactionFormData extends Omit<Transaction, 'id'> {}
