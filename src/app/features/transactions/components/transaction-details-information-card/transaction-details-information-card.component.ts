import { Component, input } from '@angular/core';
import { Transaction } from '../../models/transaction.model';
import {MATERIAL_COMMON} from "../../../../core/shared/material/common.imports"

@Component({
  selector: 'app-transaction-details-information-card',
  imports: [...MATERIAL_COMMON ],
  templateUrl: './transaction-details-information-card.component.html',
  styleUrl: './transaction-details-information-card.component.scss',
})
export class TransactionDetailsInformationCardComponent {
  transaction = input.required<Transaction>();

  //APPLYING CLASS DEPENDING UPON STATUS
   getStatusClass(status: string): string {
    switch (status?.toUpperCase()) {
      case 'SUCCESS':
        return 'success-text';
      case 'FAILED':
        return 'danger-text';
      case 'PENDING':
        return 'warning-text';
      case 'PROCESSING':
        return 'warning-text';
      case 'INITIALIZED':
        return 'warning-text';
      default:
        return '';
    }
  }

  
//APPLYING CLASS DEPENDING OF TYPE
  getTypeClass(type: string): string {

    switch (type?.toUpperCase()) {
      case 'CREDIT':
        return 'credit-text';
      case 'DEBIT':
        return 'debit-text';
      case 'WITHDRAWAL':
        return 'debit-text';
      case 'REFUND':
        return 'credit-text';
      default:
        return '';
    }

  }
}
