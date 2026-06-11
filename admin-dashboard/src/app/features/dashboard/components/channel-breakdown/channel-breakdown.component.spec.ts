import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelBreakdownComponent } from './channel-breakdown.component';

describe('ChannelBreakdownComponent', () => {
  let component: ChannelBreakdownComponent;
  let fixture: ComponentFixture<ChannelBreakdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChannelBreakdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChannelBreakdownComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
