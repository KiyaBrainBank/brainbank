import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctionMaturityAnalysisComponent } from './sanction-maturity-analysis.component';

describe('SanctionMaturityAnalysisComponent', () => {
  let component: SanctionMaturityAnalysisComponent;
  let fixture: ComponentFixture<SanctionMaturityAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanctionMaturityAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanctionMaturityAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
