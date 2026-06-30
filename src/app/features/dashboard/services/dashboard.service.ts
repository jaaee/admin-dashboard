import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {API_ENDPOINTS} from "./../../../core/shared/constants/api.constants";
import { Alert } from '../models/alert.model';
import { Channel } from '../models/channel.model';
import { Transaction } from '../../transactions/models/transaction.model';
import { SummaryCard } from '../models/summary-card.model';
import { RiskLevel } from '../models/risk-level.model';
import { TransactionPage } from '../../transactions/models/transaction-page';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
    private http = inject(HttpClient);
      private url= 'assets/data/counters.json';

    getChannelData(): Observable<Channel[]> {
      return this.http.get<Channel[]>(API_ENDPOINTS.TRANSACTIONS + "/channel-breakdown")
    }

    getAlertData():Observable<Alert[]> {
      return this.http.get<Alert[]>(API_ENDPOINTS.ALERTS)
    }

    
  getRecentTransactions(pageNo:number,pageSize:number): Observable<TransactionPage> {
    const params = new HttpParams()
  .set('page', pageNo)
  .set('size', pageSize);

    return this.http.get<TransactionPage>(API_ENDPOINTS.TRANSACTIONS + "/recent",{params})
  }

  
  getSummaryCardsData(): Observable<SummaryCard[]> {
  return this.http.get<SummaryCard[]>(API_ENDPOINTS.STATISTICS + "/summary" )
  }

   getRiskLevelData():Observable<RiskLevel[]> {
  return this.http.get<RiskLevel[]>( API_ENDPOINTS.STATISTICS+ "/risk-analysis")
  }

    getLiveCounters(): Observable<any> {
    return this.http.get(this.url)
  }
  
  getTransactionDataOverWeek():Observable<any> {
    return this.http.get(API_ENDPOINTS.STATISTICS + "/totalTransactionTrend")
  }

  getHighRiskTransactionDataOverWeek():Observable<any> {
    return this.http.get(API_ENDPOINTS.STATISTICS + "/highRisktransactionTrend")
  }
}
