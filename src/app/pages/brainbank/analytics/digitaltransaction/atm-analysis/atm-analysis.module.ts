import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtmAnalysisRoutingModule } from './atm-analysis-routing.module';
import { AtmAnalysisComponent } from './atm-analysis.component';


@NgModule({
  declarations: [AtmAnalysisComponent],
  imports: [
    CommonModule,
    AtmAnalysisRoutingModule
  ]
})
export class AtmAnalysisModule { }
