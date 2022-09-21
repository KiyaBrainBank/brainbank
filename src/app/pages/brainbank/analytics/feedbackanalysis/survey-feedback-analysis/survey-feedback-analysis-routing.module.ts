import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyFeedbackAnalysisComponent } from './survey-feedback-analysis.component';

const routes: Routes = [{ path:'', component: SurveyFeedbackAnalysisComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyFeedbackAnalysisRoutingModule { }
