import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyFeedbackAnalysisRoutingModule } from './survey-feedback-analysis-routing.module';
import { SurveyFeedbackAnalysisComponent } from './survey-feedback-analysis.component';


@NgModule({
  declarations: [SurveyFeedbackAnalysisComponent],
  imports: [
    CommonModule,
    SurveyFeedbackAnalysisRoutingModule
  ]
})
export class SurveyFeedbackAnalysisModule { }
