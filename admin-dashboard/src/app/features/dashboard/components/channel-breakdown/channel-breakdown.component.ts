import { Component, input } from '@angular/core';
import {
  Chart,
  ChartConfiguration,
  ChartData,
  Plugin
} from 'chart.js';

import { BaseChartDirective } from 'ng2-charts';
import { Channel } from '../../models/channel.model';
import { MATERIAL_COMMON } from '../../../../core/shared/material/common.imports';


@Component({
  selector: 'app-channel-breakdown',
  imports: [...MATERIAL_COMMON,BaseChartDirective],
  templateUrl: './channel-breakdown.component.html',
  styleUrl: './channel-breakdown.component.scss',
})
export class ChannelBreakdownComponent {

  channels = input.required<Channel[]>();



  public pieChartType: 'doughnut' = 'doughnut';

 
get pieChartData(): ChartData<'doughnut'> {

  return {
    labels: this.channels().map(item => item.name),

    datasets: [
      {
        data: this.channels().map(item => item.percent),

        backgroundColor: this.channels().map(
          item => item.color
        ),


        borderWidth: 0
      }
    ]
  };

}

//CENTERTEXT AS TOTAL TRACTION DATA 
get totalTransactionCount(): number {

  return this.channels().reduce(
    (sum, item) => sum + Number(item.count),
    0
  );
}
public pieChartOptions:
    ChartConfiguration<'doughnut'>['options'] = {

    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',

    plugins: {
      legend: {
        display: false
      },
       tooltip: {
      enabled: true
    }
    }
  };

  public pieChartPlugins = [

  {
    id: 'centerText',

    beforeDraw: (chart: any) => {

      const { width, height, ctx } = chart;

      ctx.restore();

      const dataset = chart.data.datasets[0];

      const totalTransactions = this.totalTransactionCount;
        
      /* Main Text */

      ctx.font = '600 32px Roboto';

      ctx.fillStyle = '#111827';

      ctx.textBaseline = 'middle';

      const text =
        totalTransactions.toLocaleString();

      const textX =
        (width - ctx.measureText(text).width) / 2;

      const textY = height / 2 - 8;

      ctx.fillText(text, textX, textY);

      /* Subtitle */

      ctx.font = '500 13px Roboto';

      ctx.fillStyle = '#6B7280';

      const subtitle = 'Transactions';

      const subtitleX =
        (width - ctx.measureText(subtitle).width) / 2;

      ctx.fillText(
        subtitle,
        subtitleX,
        textY + 24
      );

      ctx.save();
    }
  }
];
  
}
