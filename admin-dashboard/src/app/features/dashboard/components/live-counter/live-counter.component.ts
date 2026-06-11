import { Component, computed, inject } from '@angular/core';

import { TransactionDashboardSocket } from '../../services/transaction-dashboard-socket';
import { LIVE_COUNTER_CARDS } from '../../data/live-counter.data';
import { MATERIAL_COMMON } from '../../../../core/shared/material/common.imports';
@Component({
  selector: 'app-live-counter',
  imports: [...MATERIAL_COMMON],
  templateUrl: './live-counter.component.html',
  styleUrl: './live-counter.component.scss',
})
export class LiveCounterComponent {

  private socketService =
  inject(TransactionDashboardSocket);


//TO GET LIVE DATA
  readonly liveCounters =
    this.socketService.liveCounters;

currentCount = 0;

  ngOnInit(): void {

    this.socketService.connect();
  }

 
  //CARDS ARE UPDATED WITH LATEST VALUES
   counterCards = computed(() => {
  const response = this.liveCounters();

  return LIVE_COUNTER_CARDS.map(card => ({
    ...card,
    value: response?.[card.key as keyof typeof response] ?? 0
  }));

});

}
