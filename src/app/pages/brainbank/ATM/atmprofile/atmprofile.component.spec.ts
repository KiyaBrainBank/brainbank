import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmprofileComponent } from './atmprofile.component';

describe('AtmprofileComponent', () => {
  let component: AtmprofileComponent;
  let fixture: ComponentFixture<AtmprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtmprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
