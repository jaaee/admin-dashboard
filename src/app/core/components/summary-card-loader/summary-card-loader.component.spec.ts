import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryCardLoaderComponent } from './summary-card-loader.component';

describe('SummaryCardLoaderComponent', () => {
  let component: SummaryCardLoaderComponent;
  let fixture: ComponentFixture<SummaryCardLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryCardLoaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SummaryCardLoaderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
