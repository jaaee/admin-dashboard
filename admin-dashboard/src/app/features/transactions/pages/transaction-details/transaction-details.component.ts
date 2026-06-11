import { Component, signal ,inject,Signal} from '@angular/core';

import { Transaction } from '../../models/transaction.model';
import { TransactionType } from '../../models/transaction-type.enum';
import { TransactionChannel } from '../../models/transaction-channel.enum';
import { TransactionStatus } from '../../models/transaction-status.enum';

import { TransactionDetailsSummaryCardComponent } from '../../components/transaction-details-summary-card/transaction-details-summary-card.component';
import { TransactionDetailsInformationCardComponent } from '../../components/transaction-details-information-card/transaction-details-information-card.component';
import { TransactionDetailsRiskCardComponent } from '../../components/transaction-details-risk-card/transaction-details-risk-card.component';
import { TransactionDetailsRiskLevelCardComponent } from '../../components/transaction-details-risk-level-card/transaction-details-risk-level-card.component';
import { TransactionDetailsHeaderComponent } from '../../components/transaction-details-header/transaction-details-header.component';

import { TransactionService } from '../../services/transaction.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { toSignal } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-transaction-details',
  imports: [TransactionDetailsSummaryCardComponent,TransactionDetailsInformationCardComponent,TransactionDetailsRiskCardComponent,TransactionDetailsRiskLevelCardComponent,TransactionDetailsHeaderComponent],
  templateUrl: './transaction-details.component.html',
  styleUrl: './transaction-details.component.scss',
})
export class TransactionDetailsComponent {

  private transactionService = inject(TransactionService);
   private readonly route = inject(ActivatedRoute);


  searchKeyword = '';

 //getting transaction as signal
 transaction : Signal<Transaction> = toSignal(
  this.transactionService.getTransactionsByFilter({
    searchKeyword: this.route.snapshot.params['id'],
    status: null,
    type: null,
    channel: null,
    pageNumber: 0,
    pageSize: 10,
    sortField: 'createdAt',
    sortOrder: 'DESC'
  }).pipe(
    map((response:any) => response.content?.[0] ?? null)
  ),
  { initialValue:    {
    "id": 1,
    "referenceNo": "REF-2026-0001",
    "customerName": "john",
    "amount": 12500,
    "status": "SUCCESS",
    "riskLevel": "LOW",
    "channel": "UPI",
    "currency": "INR",
    "type": "CREDIT",
    "riskScore": 15,
    "createdAt":"",
    "updatedAt":""
  } }
);

}
