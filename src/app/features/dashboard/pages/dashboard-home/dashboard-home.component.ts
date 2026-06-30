import { Component, computed, inject,Signal,signal } from '@angular/core';
import { SummaryCard } from '../../models/summary-card.model';

import { DashboardHeaderComponent } from '../../components/dashboard-header/dashboard-header.component';
import { RiskChartComponent } from '../../components/risk-chart/risk-chart.component';
import { ChannelBreakdownComponent } from '../../components/channel-breakdown/channel-breakdown.component';
import { TransactionChartComponent } from '../../components/transaction-chart/transaction-chart.component';
import { SummaryCardComponent } from '../../components/summary-card/summary-card.component';
import { map, Observable, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LiveCounterComponent } from "../../components/live-counter/live-counter.component";
import { Channel } from '../../models/channel.model';
import { DashboardService } from '../../services/dashboard.service';
import { TransactionSummaryComponent } from "../transaction-summary/transaction-summary.component";
import { AlertsComponent } from "../../components/alerts/alerts.component";
import { Alert } from '../../models/alert.model';
import { Transaction } from '../../../transactions/models/transaction.model';
import { RiskLevel } from '../../models/risk-level.model';
import { TransactionPage } from '../../../transactions/models/transaction-page';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

  

@Component({
  selector: 'app-dashboard-home',
  imports: [ CommonModule,DashboardHeaderComponent, RiskChartComponent, ChannelBreakdownComponent, TransactionChartComponent, SummaryCardComponent, LiveCounterComponent, TransactionSummaryComponent, AlertsComponent],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.scss',
})
export class DashboardHomeComponent 
{

   private dashboardService = inject(DashboardService)

    pageNo = signal(0)
    pageSize = signal(5);


   //TO SET COLORS ACCORDING TO CHANNELS
  CHANNEL_COLORS:any = {
  UPI: '#3b82f6',
  CARD: '#f59e0b',
  NET_BANKING: '#22c55e',
  WALLET: '#8b5cf6',
  OTHERS: '#d1d5db'
};

//TO SET RISK LEVEL COLORS
RISKLEVELS_COLORS:any={
   'LOW RISK':'#2196F3',
     'HIGH RISK':'#F44336',
     'CRITICAL RISK':'#B71C1C',
    'MEDIUM RISK':'#FF9800',
   
  }

  //tO SET ICON AND COLOR FOR SUMMARY CARD
cardConfig: Record<string, { icon: string; color: string }> = {
  'Total Transactions': {
    icon: 'sync_alt',
    color: 'primary'
  },
  'Pending Transactions': {
    icon: 'schedule',
    color: 'warning'
  },
  'Failed Transactions': {
    icon: 'cancel',
    color: 'danger'
  },
  'High Risk Transactions': {
    icon: 'shield',
    color: 'purple'
  },
   'Successful Transactions': {
    icon: 'check_circle',
    color: 'success'
  },
};



   transactionsSummaryCards$: Observable<SummaryCard[]> =
    this.dashboardService.getSummaryCardsData().pipe(
  map(cards =>
    cards.map((card:SummaryCard) => ({
      ...card,
      icon: this.cardConfig[card.title]?.icon ?? 'analytics',
      color: this.cardConfig[card.title]?.color ?? 'primary'
    }))
  )
);
    
  //  transactionsSummary$: Observable<TransactionPage> =
  //   this.dashboardService.getRecentTransactions(this.pageNo(),this.pageSize());


  refresh = computed(() => ({
  pageNo: this.pageNo(),
  pageSize: this.pageSize()
}));

 transactionsSummary: Signal<TransactionPage | undefined> = toSignal(
  toObservable(this.refresh).pipe(
    switchMap(({ pageNo, pageSize }) =>
      this.dashboardService.getRecentTransactions(pageNo, pageSize)
    )
  )
);
    channelData$: Observable<Channel[]> = this.dashboardService.getChannelData().pipe(
    map(response =>
      response.map((item :Channel)=> ({
        ...item,
        color: this.CHANNEL_COLORS[item.name] ?? '#607D8B'
      }))
    )
  );

  riskLevelData$: Observable <RiskLevel[]> = this.dashboardService.getRiskLevelData().pipe(
    map(response =>
      response.map((item :RiskLevel)=> ({
        ...item,
        color: this.RISKLEVELS_COLORS[(item.label).toUpperCase()] ?? '#607D8B'
      }))
    )
  );

    alertData$:Observable<Alert[]> = this.dashboardService.getAlertData().pipe(
    map(response =>
      response.map((item :Alert)=> ({
        ...item,
      icon: 'sync',
      }))
    )
  );

  transactionChartData$:Observable<any[]> = this.dashboardService.getTransactionDataOverWeek();
  
  highRiskLineData$:Observable<any[]> = this.dashboardService.getHighRiskTransactionDataOverWeek();

  updatePageFilter(event$:any){
   
    this.pageNo.set(event$.pageNo);
  this.pageSize.set(event$.pageSize);
  }

}
