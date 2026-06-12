import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDetailsRiskCardComponent } from './transaction-details-risk-card.component';

describe('TransactionDetailsRiskCardComponent', () => {
  let component: TransactionDetailsRiskCardComponent;
  let fixture: ComponentFixture<TransactionDetailsRiskCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionDetailsRiskCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionDetailsRiskCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
