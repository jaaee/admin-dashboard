import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionToolbarComponent } from './transaction-toolbar.component';

describe('TransactionToolbarComponent', () => {
  let component: TransactionToolbarComponent;
  let fixture: ComponentFixture<TransactionToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionToolbarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
