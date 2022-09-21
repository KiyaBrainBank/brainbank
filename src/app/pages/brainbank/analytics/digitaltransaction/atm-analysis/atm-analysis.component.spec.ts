import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmAnalysisComponent } from './atm-analysis.component';

describe('AtmAnalysisComponent', () => {
  let component: AtmAnalysisComponent;
  let fixture: ComponentFixture<AtmAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtmAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
