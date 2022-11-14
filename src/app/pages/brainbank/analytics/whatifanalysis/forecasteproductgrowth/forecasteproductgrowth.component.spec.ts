import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecasteproductgrowthComponent } from './forecasteproductgrowth.component';

describe('ForecasteproductgrowthComponent', () => {
  let component: ForecasteproductgrowthComponent;
  let fixture: ComponentFixture<ForecasteproductgrowthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecasteproductgrowthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecasteproductgrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
