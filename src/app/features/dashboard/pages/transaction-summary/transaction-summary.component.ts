import { Component, Input ,inject, output} from '@angular/core';
import { Transaction } from '../../../transactions/models/transaction.model';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator ,PageEvent} from '@angular/material/paginator';
import { MATERIAL_COMMON } from '../../../../core/shared/material/common.imports';
import { TransactionPage } from '../../../transactions/models/transaction-page';

@Component({
  selector: 'app-transaction-summary',
  imports: [...MATERIAL_COMMON,MatTableModule,MatMenuModule,MatPaginator],
  templateUrl: './transaction-summary.component.html',
  styleUrl: './transaction-summary.component.scss',
})
export class TransactionSummaryComponent {

  onTransactionPageChange = output<any>();

  displayedColumns: string[] = [
  'id',
  'customer',
  'amount',
  'status',
  'actions'
];
   @Input() transactions:TransactionPage ={content:[],totalElements:0,pageSize:5,pageNumber:0}

     private readonly router = inject(Router);

     //NAVIGATE TO TRANSACTION DETAIL PAGE
     viewTransaction(refNo:any) {
   this.router.navigate(['transactions/details/', refNo]);
  }

  onPageChange(event: PageEvent): void {
let pageObj ={
  pageNo :  event.pageIndex,
  pageSize: event.pageSize
}
  this.onTransactionPageChange.emit(pageObj)

}
}
