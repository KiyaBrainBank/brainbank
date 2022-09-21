import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateOfInterestDeviationComponent } from './rate-of-interest-deviation.component';

describe('RateOfInterestDeviationComponent', () => {
  let component: RateOfInterestDeviationComponent;
  let fixture: ComponentFixture<RateOfInterestDeviationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateOfInterestDeviationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateOfInterestDeviationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
