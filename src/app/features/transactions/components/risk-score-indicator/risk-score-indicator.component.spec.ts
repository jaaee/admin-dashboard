import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskScoreIndicatorComponent } from './risk-score-indicator.component';

describe('RiskScoreIndicatorComponent', () => {
  let component: RiskScoreIndicatorComponent;
  let fixture: ComponentFixture<RiskScoreIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiskScoreIndicatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RiskScoreIndicatorComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
