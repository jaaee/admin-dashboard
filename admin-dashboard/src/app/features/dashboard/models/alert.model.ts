export interface Alert {
  id: string;

  title: string;

  message: string;

  type: 'fraud'
  | 'transaction'
  | 'system'
  | 'security'
  | 'info';

  severity:  'low'
  | 'medium'
  | 'high'
  | 'critical';

  source?: string;

  timestamp: Date;

  isRead: boolean;
  icon:string;
  transactionRefNo:string
}