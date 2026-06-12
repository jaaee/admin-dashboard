import { TransactionStatus } from './transaction-status.enum';
import { TransactionType } from './transaction-type.enum';
import { TransactionChannel } from './transaction-channel.enum';
import { RiskLevel } from './risk-level.enum';

export interface Transaction {
  id: number;
  referenceNo: string;
  customerName: string;
  amount: number;
  currency: string;

  type: TransactionType;
  channel: TransactionChannel;
  status: TransactionStatus;
  riskLevel: RiskLevel;

  riskScore: number;

  createdAt: Date;
  updatedAt: Date;
}