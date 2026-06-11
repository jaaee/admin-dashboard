import { Component, Input ,inject} from '@angular/core';
import { Transaction } from '../../../transactions/models/transaction.model';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MATERIAL_COMMON } from '../../../../core/shared/material/common.imports';

@Component({
  selector: 'app-transaction-summary',
  imports: [...MATERIAL_COMMON,MatTableModule,MatMenuModule,MatPaginator],
  templateUrl: './transaction-summary.component.html',
  styleUrl: './transaction-summary.component.scss',
})
export class TransactionSummaryComponent {

  displayedColumns: string[] = [
  'id',
  'customer',
  'amount',
  'status',
  'actions'
];
   @Input() transactions:Transaction[] =[]

     private readonly router = inject(Router);

     //NAVIGATE TO TRANSACTION DETAIL PAGE
     viewTransaction(refNo:any) {
   this.router.navigate(['transactions/details/', refNo]);
  }
}
