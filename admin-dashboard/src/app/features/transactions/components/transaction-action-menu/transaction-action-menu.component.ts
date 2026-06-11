import { Component, input ,inject} from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MATERIAL_COMMON } from '../../../../core/shared/material/common.imports';

import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-action-menu',
  imports: [...MATERIAL_COMMON,MatMenuModule],
  templateUrl: './transaction-action-menu.component.html',
  styleUrl: './transaction-action-menu.component.scss',
})
export class TransactionActionMenuComponent {
    transactionRefNo= input<any>('');

     private readonly router = inject(Router);


//NAVIGATING TO TRANSACTION DETAIL PAGE
  viewTransaction() {
   this.router.navigate(['transactions/details/', this.transactionRefNo()]);
  }


 }
