import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-status-chip',
  imports: [CommonModule],
  templateUrl: './transaction-status-chip.component.html',
  styleUrl: './transaction-status-chip.component.scss',
})
export class TransactionStatusChipComponent {
   status = input<any>('');
}
