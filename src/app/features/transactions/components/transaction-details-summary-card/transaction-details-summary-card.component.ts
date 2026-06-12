import { Component, input } from '@angular/core';
import { Transaction } from '../../models/transaction.model';
import {MATERIAL_COMMON} from "../../../../core/shared/material/common.imports";


@Component({
  selector: 'app-transaction-details-summary-card',
  imports: [...MATERIAL_COMMON],
  templateUrl: './transaction-details-summary-card.component.html',
  styleUrl: './transaction-details-summary-card.component.scss',
})
export class TransactionDetailsSummaryCardComponent {
  transaction = input.required<Transaction>();
  
   copyReference() {
    navigator.clipboard.writeText(this.transaction().referenceNo);
  }
}
