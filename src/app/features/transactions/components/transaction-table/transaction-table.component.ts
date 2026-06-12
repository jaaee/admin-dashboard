import { Component, input } from '@angular/core';
import { Transaction } from '../../models/transaction.model';
import { RiskScoreIndicatorComponent } from '../risk-score-indicator/risk-score-indicator.component';
import { TransactionStatusChipComponent } from '../transaction-status-chip/transaction-status-chip.component';
import { TransactionActionMenuComponent } from "../transaction-action-menu/transaction-action-menu.component";
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-transaction-table',
  imports: [MatTableModule, RiskScoreIndicatorComponent, TransactionStatusChipComponent, TransactionActionMenuComponent],
  templateUrl: './transaction-table.component.html',
  styleUrl: './transaction-table.component.scss',
})
export class TransactionTableComponent {
  data= input<Transaction[]>([]) 

  //COLUMN TO DISPLAY ON TABLE
  displayedColumns: string[] = [
    'referenceNo',
    'customerName',
    'amount',
    'status',
    'risk',
    'actions'
  ];
}
