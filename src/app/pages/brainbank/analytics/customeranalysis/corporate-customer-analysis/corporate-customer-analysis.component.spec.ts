import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateCustomerAnalysisComponent } from './corporate-customer-analysis.component';

describe('CorporateCustomerAnalysisComponent', () => {
  let component: CorporateCustomerAnalysisComponent;
  let fixture: ComponentFixture<CorporateCustomerAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateCustomerAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateCustomerAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
