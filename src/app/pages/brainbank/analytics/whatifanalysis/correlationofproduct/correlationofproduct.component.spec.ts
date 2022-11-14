import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrelationofproductComponent } from './correlationofproduct.component';

describe('CorrelationofproductComponent', () => {
  let component: CorrelationofproductComponent;
  let fixture: ComponentFixture<CorrelationofproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrelationofproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrelationofproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
