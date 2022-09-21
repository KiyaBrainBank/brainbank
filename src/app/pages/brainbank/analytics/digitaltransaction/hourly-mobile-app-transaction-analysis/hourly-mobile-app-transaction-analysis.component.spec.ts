import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyMobileAppTransactionAnalysisComponent } from './hourly-mobile-app-transaction-analysis.component';

describe('HourlyMobileAppTransactionAnalysisComponent', () => {
  let component: HourlyMobileAppTransactionAnalysisComponent;
  let fixture: ComponentFixture<HourlyMobileAppTransactionAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourlyMobileAppTransactionAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HourlyMobileAppTransactionAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
