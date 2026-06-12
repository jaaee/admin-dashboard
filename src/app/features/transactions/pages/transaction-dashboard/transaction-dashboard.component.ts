import { Component, inject, signal ,Signal} from '@angular/core';
import { TransactionTableComponent } from '../../components/transaction-table/transaction-table.component';
import { TransactionToolbarComponent } from '../../components/transaction-toolbar/transaction-toolbar.component';
import { TransactionFiltersComponent } from '../../components/transaction-filters/transaction-filters.component';
import { TransactionPaginationComponent } from '../../components/transaction-pagination/transaction-pagination.component';
import { TransactionService } from '../../services/transaction.service';
import { Observable, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { TransactionFilter } from '../../models/transaction-filter.model';
import { TransactionPage } from '../../models/transaction-page';

@Component({
  selector: 'app-transaction-dashboard',
  imports: [TransactionTableComponent,
    TransactionToolbarComponent, TransactionFiltersComponent, TransactionPaginationComponent, CommonModule],
  templateUrl: './transaction-dashboard.component.html',
  styleUrl: './transaction-dashboard.component.scss',
})
export class TransactionDashboardComponent {

   private transactionService = inject(TransactionService);
   private readonly route = inject(ActivatedRoute);
 
   //DEFAULT FILTER SET   
   defaulutFilters: TransactionFilter = {
  "searchKeyword": "",
  "status": null,
  "type": null,
  "channel": null,
  "pageNumber": 0,
  "pageSize": 10,
  "sortField": "createdAt",
  "sortOrder": "DESC"
}

// WHENEVER FILTERS GETTING CHANGED FILTERREQUEST GETTING UPDATED
filterRequest = signal(this.defaulutFilters);

searchKeyword:any ='';

// GETTING QUERYPARAMS FROM URL LIKE SEARCH KEYWORD AND GETTING TRANSACTIONS RECORS
ngOnInit(): void {

  this.route.queryParamMap.subscribe(params => {

    const searchKeyword =
      params.get('searchKeyword') ?? '';

    this.searchKeyword = searchKeyword
   
    this.filterRequest.update(current => ({
  ...current,
  searchKeyword
}));  
  });

}

 
  //ON FILTER CHANGED
    onFilterChanged(filter: any): void {
       this.filterRequest.update(current => ({
    ...current,
    searchKeyword: filter.searchKeyword,
    status: filter.status,
    type: filter.type,
    channel: filter.channel
  }));
}

//GETTING TRANSACTIONS  AS SIGNAL
transactionPage: Signal<TransactionPage | undefined>= toSignal(
  toObservable(this.filterRequest).pipe(
    switchMap((filter:TransactionFilter) =>
      this.transactionService.getTransactionsByFilter(filter)
    )
  )
);

//EXPORT TRANSACTIONS IN EXCEL
exportTransactions(): void{

   console.log('Parent received event');

  this.transactionService.exportTransaction(this.filterRequest())
   .subscribe(blob => {

        const url =
          window.URL.createObjectURL(blob);

        const a =
          document.createElement('a');

        a.href = url;
        a.download = 'transactions.xlsx';

        a.click();

        window.URL.revokeObjectURL(url);
      });
}

//ON CHANGE OF PAGE SIZE AND PAGE NO
updatePageFilter(event$:any){
    this.filterRequest.update(current => ({
    ...current,
     "pageNumber": event$.pageNo,
  "pageSize": event$.pageSize
  }));

}
  
}
