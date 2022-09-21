import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualCustomerAnalysisComponent } from './individual-customer-analysis.component';

describe('IndividualCustomerAnalysisComponent', () => {
  let component: IndividualCustomerAnalysisComponent;
  let fixture: ComponentFixture<IndividualCustomerAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualCustomerAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualCustomerAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
