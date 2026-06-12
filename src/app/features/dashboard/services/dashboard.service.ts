import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {API_ENDPOINTS} from "./../../../core/shared/constants/api.constants";
import { Alert } from '../models/alert.model';
import { Channel } from '../models/channel.model';
import { Transaction } from '../../transactions/models/transaction.model';
import { SummaryCard } from '../models/summary-card.model';
import { RiskLevel } from '../models/risk-level.model';

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

    
  getRecentTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(API_ENDPOINTS.TRANSACTIONS + "/recent")
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
  

}
