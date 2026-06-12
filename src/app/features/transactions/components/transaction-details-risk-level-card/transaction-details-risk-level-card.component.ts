import { Component,input } from '@angular/core';
import {MATERIAL_COMMON} from "../../../../core/shared/material/common.imports";
import { Transaction } from '../../models/transaction.model';
@Component({
  selector: 'app-transaction-details-risk-level-card',
  imports: [...MATERIAL_COMMON],
  templateUrl: './transaction-details-risk-level-card.component.html',
  styleUrl: './transaction-details-risk-level-card.component.scss',
})
export class TransactionDetailsRiskLevelCardComponent {
    transaction = input.required<Transaction>();

}
