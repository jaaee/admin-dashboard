import { Component, input } from '@angular/core';
import { SummaryCard } from '../../models/summary-card.model';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { MATERIAL_COMMON } from '../../../../core/shared/material/common.imports';


@Component({
  selector: 'app-summary-card',
  imports: [...MATERIAL_COMMON, BaseChartDirective],
  templateUrl: './summary-card.component.html',
  styleUrl: './summary-card.component.scss',
})
export class SummaryCardComponent {
    
  //INPUT
    card = input.required<SummaryCard>();

    //TO SHOW GRAPH
     get lineChartData():
    ChartConfiguration<'line'>['data'] {

    return {

      labels:
        this.card()?.chartData.map((_, i) => i + 1),

      datasets: [
        {
          data: this.card()?.chartData,

          tension: 0.4,

          borderWidth: 3,

          pointRadius: 0,

          fill: true
        }
      ]

    };

  }

  // Chart options

  lineChartOptions:
    ChartOptions<'line'> = {

    responsive: true,

    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    },

    scales: {

      x: {
        display: false
      },

      y: {
        display: false
      }

    }

  };
}
