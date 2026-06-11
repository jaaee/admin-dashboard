import { Component, output, inject, input, SimpleChanges } from '@angular/core';
import { TransactionStatus } from '../../models/transaction-status.enum';
import { TransactionType } from '../../models/transaction-type.enum';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { TransactionService } from '../../services/transaction.service';
import { toSignal } from '@angular/core/rxjs-interop';
import {MATERIAL_FORM} from"../../../../core/shared/material/form.imports"

@Component({
  selector: 'app-transaction-filters',
  imports: [...MATERIAL_FORM ],
  templateUrl: './transaction-filters.component.html',
  styleUrl: './transaction-filters.component.scss',
})
export class TransactionFiltersComponent {

 //FILTERCHANGE OUTPUT EVENT
filterChanged = output<any>();

//SEARCHKEYWORD INPUT GETTING FROM TRANSACTIION DASHBOARD
 searchKeyword=input<string >('');

private fb = inject(FormBuilder);
private transactionService = inject(TransactionService)


 //TRANSACTION STATUS LIST
  statuses = Object.values(TransactionStatus);

  //TRANSACTION TYPE LIST
  type = Object.values(TransactionType)

  //FILTERFORM
  filterForm = this.fb.group({
  status: [null],
  channel: [null],
  type: [null],
  searchKeyword: ['']
});

//CHANNEL IS SIGNAL
channels = toSignal(
  this.transactionService.getChannelData(),
  { initialValue: [] }
);

ngOnInit(): void {

//ON CHANGES OF FILTERFORM
  this.filterForm.valueChanges
    .pipe(
      debounceTime(300),
      distinctUntilChanged()
    )
    .subscribe(filters => {
      this.filterChanged.emit(filters);
    });

}

//ON SEARCHKEYWORD CHANGE
ngOnChanges(
  changes: SimpleChanges
): void {

  if (changes['searchKeyword']) {

    this.filterForm.patchValue(
      {
        searchKeyword: this.searchKeyword()
      },
      {
        emitEvent: false
      }
    );

  }
}
  
}
