import { Component,computed,input } from '@angular/core';
import 'chart.js/auto';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartConfiguration,
  ChartOptions
} from 'chart.js';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

import { BaseChartDirective } from 'ng2-charts';
import { MATERIAL_COMMON } from '../../../../core/shared/material/common.imports';

@Component({
  selector: 'app-transaction-chart',
  imports: [...MATERIAL_COMMON,BaseChartDirective],
  templateUrl: './transaction-chart.component.html',
  styleUrl: './transaction-chart.component.scss',
})
export class TransactionChartComponent {
  
  chartData = input<any[]>([]);

 public lineChartData = computed<ChartConfiguration<'line'>['data']>(() => ({
    labels: [
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
      'Sun'
    ],

    datasets: [
      {
        data: this.chartData(),

        label: 'Transactions',

        fill: true,

        tension: 0.4,

        borderColor: '#1976d2',

        backgroundColor: 'rgba(25, 118, 210, 0.2)',

        pointBackgroundColor: '#1976d2',

        pointBorderColor: '#ffffff',

        pointRadius: 5
      }
    ]
  }));

  public lineChartOptions: ChartOptions<'line'> = {

    responsive: true,

    maintainAspectRatio: false,

    plugins: {

      legend: {
        display: true,
        position: 'top'
      }

    },

    scales: {

      x: {
        grid: {
          display: false
        }
      },

      y: {
        beginAtZero: true
      }

    }

  };
}
