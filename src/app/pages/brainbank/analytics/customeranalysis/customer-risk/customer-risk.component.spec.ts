import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRiskComponent } from './customer-risk.component';

describe('CustomerRiskComponent', () => {
  let component: CustomerRiskComponent;
  let fixture: ComponentFixture<CustomerRiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerRiskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
