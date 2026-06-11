import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alert } from '../../models/alert.model';
import { Router } from '@angular/router';
import { MATERIAL_COMMON } from '../../../../core/shared/material/common.imports';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-alerts',
  imports: [...MATERIAL_COMMON,MatListModule],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.scss',
})
export class AlertsComponent {

  private readonly router = inject(Router);
  alerts = input.required<Alert[]>();


  //NAVIGATE TO TRANSACTION PAGE
goToTransactions(transactionRefNo:any) {

  this.router.navigate(
    ['/transactions'],
    {
      queryParams: {
        searchKeyword: transactionRefNo
      }
    }
  );
}

//DEPENDING UPON ALERT TYPE ICON IS GETTING ASSIGN
 getAlertIcon(type: string): string {
  switch (type) {
    case 'FRAUD':
      return 'report_problem';

    case 'TRANSACTION':
      return 'sync_alt';

    case 'SECURITY':
      return 'shield';

    case 'SYSTEM':
      return 'settings';

    default:
      return 'notifications';
  }
}

}