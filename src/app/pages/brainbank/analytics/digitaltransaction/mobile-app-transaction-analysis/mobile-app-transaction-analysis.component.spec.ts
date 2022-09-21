import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppTransactionAnalysisComponent } from './mobile-app-transaction-analysis.component';

describe('MobileAppTransactionAnalysisComponent', () => {
  let component: MobileAppTransactionAnalysisComponent;
  let fixture: ComponentFixture<MobileAppTransactionAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileAppTransactionAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileAppTransactionAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
