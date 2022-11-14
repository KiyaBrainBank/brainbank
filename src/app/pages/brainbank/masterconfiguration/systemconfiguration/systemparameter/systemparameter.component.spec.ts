import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemparameterComponent } from './systemparameter.component';

describe('SystemparameterComponent', () => {
  let component: SystemparameterComponent;
  let fixture: ComponentFixture<SystemparameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemparameterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemparameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
