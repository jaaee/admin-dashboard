import { TestBed } from '@angular/core/testing';

import { TransactionDashboardSocket } from './transaction-dashboard-socket';

describe('TransactionDashboardSocket', () => {
  let service: TransactionDashboardSocket;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionDashboardSocket);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
