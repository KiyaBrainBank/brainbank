import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmniChannelTransactionSummaryComponent } from './omni-channel-transaction-summary.component';

describe('OmniChannelTransactionSummaryComponent', () => {
  let component: OmniChannelTransactionSummaryComponent;
  let fixture: ComponentFixture<OmniChannelTransactionSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmniChannelTransactionSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmniChannelTransactionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
