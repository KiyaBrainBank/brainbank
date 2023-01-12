import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaAnalysisRoutingModule } from './social-media-analysis-routing.module';
import { SocialMediaAnalysisComponent } from './social-media-analysis.component';


@NgModule({
  declarations: [
    SocialMediaAnalysisComponent
  ],
  imports: [
    CommonModule,
    SocialMediaAnalysisRoutingModule
  ]
})
export class SocialMediaAnalysisModule { }
