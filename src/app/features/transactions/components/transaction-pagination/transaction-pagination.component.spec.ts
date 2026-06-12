import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionPaginationComponent } from './transaction-pagination.component';

describe('TransactionPaginationComponent', () => {
  let component: TransactionPaginationComponent;
  let fixture: ComponentFixture<TransactionPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionPaginationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionPaginationComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
