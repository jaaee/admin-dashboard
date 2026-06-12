import { Component,input } from '@angular/core';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MATERIAL_COMMON} from "../../../../core/shared/material/common.imports"
import {Transaction} from "./../../models/transaction.model"
@Component({
  selector: 'app-transaction-details-risk-card',
  imports: [...MATERIAL_COMMON,MatProgressBarModule],
  templateUrl: './transaction-details-risk-card.component.html',
  styleUrl: './transaction-details-risk-card.component.scss',
})
export class TransactionDetailsRiskCardComponent {
    transaction = input.required<Transaction>();

    //TO SHOW WIDTH OF PROGRESS BAR
      get progressWidth(): string {
    return `${this.transaction().riskScore}%`;
  }
}
