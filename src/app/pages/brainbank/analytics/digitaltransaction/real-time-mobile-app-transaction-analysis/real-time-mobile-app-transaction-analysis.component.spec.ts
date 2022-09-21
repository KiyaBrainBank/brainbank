import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeMobileAppTransactionAnalysisComponent } from './real-time-mobile-app-transaction-analysis.component';

describe('RealTimeMobileAppTransactionAnalysisComponent', () => {
  let component: RealTimeMobileAppTransactionAnalysisComponent;
  let fixture: ComponentFixture<RealTimeMobileAppTransactionAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealTimeMobileAppTransactionAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealTimeMobileAppTransactionAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
