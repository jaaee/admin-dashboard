import { Component, input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-risk-score-indicator',
  imports: [MatProgressBarModule],
  templateUrl: './risk-score-indicator.component.html',
  styleUrl: './risk-score-indicator.component.scss',
})
export class RiskScoreIndicatorComponent {
    score = input<any>(0);
}
