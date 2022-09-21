import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeogriphicalLoanDistributionComponent } from './geogriphical-loan-distribution.component';

describe('GeogriphicalLoanDistributionComponent', () => {
  let component: GeogriphicalLoanDistributionComponent;
  let fixture: ComponentFixture<GeogriphicalLoanDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeogriphicalLoanDistributionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeogriphicalLoanDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
