import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanForecastingComponent } from './loan-forecasting.component';

describe('LoanForecastingComponent', () => {
  let component: LoanForecastingComponent;
  let fixture: ComponentFixture<LoanForecastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanForecastingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanForecastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
