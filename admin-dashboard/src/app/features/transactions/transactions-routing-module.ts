import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionDashboardComponent } from './pages/transaction-dashboard/transaction-dashboard.component';

const routes: Routes = [
   {
    path: '',
    component: TransactionDashboardComponent
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./pages/transaction-details/transaction-details.component')
        .then(m => m.TransactionDetailsComponent)
  }


  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionsRoutingModule {}
