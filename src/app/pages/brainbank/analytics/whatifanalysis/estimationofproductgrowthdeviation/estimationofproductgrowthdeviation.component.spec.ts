import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimationofproductgrowthdeviationComponent } from './estimationofproductgrowthdeviation.component';

describe('EstimationofproductgrowthdeviationComponent', () => {
  let component: EstimationofproductgrowthdeviationComponent;
  let fixture: ComponentFixture<EstimationofproductgrowthdeviationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimationofproductgrowthdeviationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimationofproductgrowthdeviationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
