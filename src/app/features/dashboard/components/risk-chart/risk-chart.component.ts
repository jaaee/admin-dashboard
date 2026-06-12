import { Component, computed, input, SimpleChanges } from '@angular/core';
import {
  ChartConfiguration,
  ChartData
} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { RiskLevel } from '../../models/risk-level.model';
import { MATERIAL_COMMON } from '../../../../core/shared/material/common.imports';

@Component({
  selector: 'app-risk-chart',
  imports: [...MATERIAL_COMMON, BaseChartDirective],
  templateUrl: './risk-chart.component.html',
  styleUrl: './risk-chart.component.scss',
})
export class RiskChartComponent 
{

 riskLevels= input<RiskLevel[]>([]);


 //TO SHOW THIS AS CENTER TEXT
riskPercentage = computed(() =>
  this.riskLevels()
    .filter(item =>
      item.label === 'High Risk' ||
      item.label === 'Critical Risk'
    )
    .reduce((sum, item) => sum + item.percentage, 0)
);

public riskDonutData: ChartData<'doughnut'> = {
  labels: [],
  datasets: []
};



 ngOnChanges(changes: SimpleChanges): void {

    if (changes['riskLevels']) {

      this.riskDonutData = {
        labels: this.riskLevels.length
          ? this.riskLevels().map(item => item.label)
          : ['Critical', 'High', 'Medium', 'Low'],

        datasets: [
          {
            data: this.riskLevels.length
              ? this.riskLevels().map(item => item.percentage)
              : [20, 20, 10, 50],

            backgroundColor: this.riskLevels.length
              ? this.riskLevels().map(item => item.color)
              : [
                  '#B71C1C',
                  '#F44336',
                  '#FF9800',
                  '#2196F3'
                ],

            borderWidth: 0
          }
        ]
      };
    }
  }


public riskDonutOptions:
ChartConfiguration<'doughnut'>['options'] = {

  responsive: true,

  cutout: '82%',

  plugins: {

    legend: {
      display: false
    },

    tooltip: {
      enabled: true
    }
  }
};



/* -------- CENTER TEXT -------- */

public riskDonutPlugins = [

  {
    id: 'centerText',

    beforeDraw: (chart: any) => {

      const { width, height, ctx } = chart;

      ctx.restore();

      ctx.font = '700 34px Roboto';

      ctx.fillStyle = '#111827';

      ctx.textBaseline = 'middle';

      const text = this.riskPercentage();

      const textX =
        (width - ctx.measureText(text).width) / 2;

      const textY = height / 2 - 8;

      ctx.fillText(
        text,
        textX,
        textY
      );

      ctx.font = '500 13px Roboto';

      ctx.fillStyle = '#6B7280';

      const subtitle = 'High Risk Alerts';

      const subtitleX =
        (width - ctx.measureText(subtitle).width) / 2;

      ctx.fillText(
        subtitle,
        subtitleX,
        textY + 28
      );

      ctx.save();
    }
  }
];



/* ---------------- LINE CHART ---------------- */

public riskTrendData:
ChartData<'line'> = {

  labels: [
    '10:25',
    '10:26',
    '10:27',
    '10:28',
    '10:29',
    '10:30'
  ],

  datasets: [
    {
      data: [18, 14, 20, 13, 21, 18],

      borderColor: '#FF5A5F',

      backgroundColor:
        'rgba(255,90,95,0.15)',

      fill: true,

      tension: 0.4,

      pointRadius: 0,

      pointHoverRadius: 5
    }
  ]
};



public riskTrendOptions:
ChartConfiguration<'line'>['options'] = {

  responsive: true,

  maintainAspectRatio: false,

  plugins: {

    legend: {
      display: false
    },

    tooltip: {
      enabled: true
    }
  },

  scales: {

    x: {

      grid: {
        display: false
      },

      border: {
        display: false
      },

      ticks: {
        color: '#94A3B8'
      }
    },

    y: {

      beginAtZero: true,

      grid: {
        color: '#F1F5F9'
      },

      border: {
        display: false
      },

      ticks: {
        stepSize: 10,
        color: '#94A3B8'
      }
    }
  }
};
  


  
}
