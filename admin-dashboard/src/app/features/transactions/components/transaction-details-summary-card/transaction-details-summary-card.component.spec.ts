import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDetailsSummaryCardComponent } from './transaction-details-summary-card.component';

describe('TransactionDetailsSummaryCardComponent', () => {
  let component: TransactionDetailsSummaryCardComponent;
  let fixture: ComponentFixture<TransactionDetailsSummaryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionDetailsSummaryCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionDetailsSummaryCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
