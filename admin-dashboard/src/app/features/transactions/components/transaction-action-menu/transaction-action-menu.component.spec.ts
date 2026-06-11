import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionActionMenuComponent } from './transaction-action-menu.component';

describe('TransactionActionMenuComponent', () => {
  let component: TransactionActionMenuComponent;
  let fixture: ComponentFixture<TransactionActionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionActionMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionActionMenuComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
