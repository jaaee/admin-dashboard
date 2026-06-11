import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {TransactionFilter} from "./../models/transaction-filter.model";
import {API_ENDPOINTS} from "./../../../core/shared/constants/api.constants"
@Injectable({
  providedIn: 'root',
})
export class TransactionService{
  
   private http = inject(HttpClient);

private channelUrl = "http://localhost:8080/api/channels";

  getChannelData(): Observable<any> {
      return this.http.get(this.channelUrl)
    }

    //TRANSACTION GETTING BY APPLYING FILTERS AND  SEARCH BY REF NO.
  getTransactionsByFilter(defaulutFilters:TransactionFilter): Observable<any> {
    return this.http.post(API_ENDPOINTS.TRANSACTIONS + "/filter" , defaulutFilters)
  }

  //GETTING ALL TRANSACTIONS
   getTransactions(): Observable<any> {
    return this.http.get(API_ENDPOINTS.TRANSACTIONS )
  }

  //EXPORT TRANSACTIONS IN EXCEL
  exportTransaction(defaulutFilters:any):  Observable<Blob> {
    return this.http.post(API_ENDPOINTS.TRANSACTIONS + "/export",defaulutFilters,
    {
      responseType: 'blob'
    })
  }

  getTransactionById(id: string): Observable<any> {
    return this.http.get(`${API_ENDPOINTS.TRANSACTIONS}/${id}`);
  }

}
