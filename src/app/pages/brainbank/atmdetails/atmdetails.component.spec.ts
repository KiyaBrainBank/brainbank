import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmdetailsComponent } from './atmdetails.component';

describe('AtmdetailsComponent', () => {
  let component: AtmdetailsComponent;
  let fixture: ComponentFixture<AtmdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtmdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
