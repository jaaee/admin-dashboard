import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDetailsHeaderComponent } from './transaction-details-header.component';

describe('TransactionDetailsHeaderComponent', () => {
  let component: TransactionDetailsHeaderComponent;
  let fixture: ComponentFixture<TransactionDetailsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionDetailsHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionDetailsHeaderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
