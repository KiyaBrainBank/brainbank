import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyFeedbackAnalysisComponent } from './survey-feedback-analysis.component';

describe('SurveyFeedbackAnalysisComponent', () => {
  let component: SurveyFeedbackAnalysisComponent;
  let fixture: ComponentFixture<SurveyFeedbackAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyFeedbackAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyFeedbackAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
