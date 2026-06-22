export type TabType = 'unpaid' | 'paid';

export interface Transaction {
  id: string;
  title: string;
  transactionCode: string;
  transactionDate: string;
  debtAmount: string;
  paidAmount: string;
  remainingAmount: string;
  status: 'debt' | 'paid';
}
