import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';
import { TransactionSummaryComponent } from './pages/transaction-summary/transaction-summary.component';


const routes: Routes = [ {
    path: '',
    component: DashboardHomeComponent
  },
  {
    path: 'transactions',
    component: TransactionSummaryComponent
  }]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
