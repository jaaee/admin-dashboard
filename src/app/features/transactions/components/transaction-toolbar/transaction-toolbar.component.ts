import { Component, output } from '@angular/core';

import { MATERIAL_COMMON } from "./../../../../core/shared/material/common.imports";
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-transaction-toolbar',
  imports: [...MATERIAL_COMMON,MatToolbarModule],
  templateUrl: './transaction-toolbar.component.html',
  styleUrl: './transaction-toolbar.component.scss',
})
export class TransactionToolbarComponent {

exportClicked =
  output<void>();

  //ON EXPORT BUTTON CLICK EVENT IS EMITTED  TO TRANSACTION DASHBOARD PAGE
    exportTransactions(){
     this.exportClicked.emit();;
  }
}
