import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmplacementComponent } from './atmplacement.component';

describe('AtmplacementComponent', () => {
  let component: AtmplacementComponent;
  let fixture: ComponentFixture<AtmplacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmplacementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtmplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
