import { Component, input, output } from '@angular/core';

import{ CommonModule } from '@angular/common'; 
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-transaction-pagination',
  imports: [MatPaginatorModule,CommonModule],
  templateUrl: './transaction-pagination.component.html',
  styleUrl: './transaction-pagination.component.scss',
})
export class TransactionPaginationComponent {

  
onTransactionPageChange = output<any>();
  totalRecords=input<number>(0)
 pageSize= input<number>(10)
 pageIndex=input<number>(1)

 //PAGECHANGE OBJECT IS SENDING BACK TO TRANSACTION DASHBOARD PAGE
 onPageChange(event: PageEvent): void {
let pageObj ={
  pageNo :  event.pageIndex,
  pageSize: event.pageSize
}
  this.onTransactionPageChange.emit(pageObj)

}

}
