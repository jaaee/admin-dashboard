export interface CounterItem {
  title: string;
  value: string;
  icon: string;
  status: 'primary' | 'success' | 'warning' | 'danger';
}