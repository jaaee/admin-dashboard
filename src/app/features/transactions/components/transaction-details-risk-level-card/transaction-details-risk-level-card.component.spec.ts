import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDetailsRiskLevelCardComponent } from './transaction-details-risk-level-card.component';

describe('TransactionDetailsRiskLevelCardComponent', () => {
  let component: TransactionDetailsRiskLevelCardComponent;
  let fixture: ComponentFixture<TransactionDetailsRiskLevelCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionDetailsRiskLevelCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionDetailsRiskLevelCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
