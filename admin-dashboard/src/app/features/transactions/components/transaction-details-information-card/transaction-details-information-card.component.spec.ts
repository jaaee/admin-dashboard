import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDetailsInformationCardComponent } from './transaction-details-information-card.component';

describe('TransactionDetailsInformationCardComponent', () => {
  let component: TransactionDetailsInformationCardComponent;
  let fixture: ComponentFixture<TransactionDetailsInformationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionDetailsInformationCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionDetailsInformationCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
