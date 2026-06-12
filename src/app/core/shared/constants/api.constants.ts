import { environment } from '../../../../enviroments/enviroment';

export const API_ENDPOINTS = {

  SYSTEM:  `${environment.systemUrl}`,

  LOGIN: `${environment.apiUrl}/auth/login`,

  VERIFY_OTP: `${environment.apiUrl}/auth/verify-otp`,

  TRANSACTIONS: `${environment.apiUrl}/transactions`,

  DASHBOARD: `${environment.apiUrl}/dashboard`,

  STATISTICS: `${environment.apiUrl}/statistics`,

  ALERTS: `${environment.apiUrl}/alerts`
};