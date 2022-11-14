import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayweekendComponent } from './holidayweekend.component';

describe('HolidayweekendComponent', () => {
  let component: HolidayweekendComponent;
  let fixture: ComponentFixture<HolidayweekendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidayweekendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidayweekendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
