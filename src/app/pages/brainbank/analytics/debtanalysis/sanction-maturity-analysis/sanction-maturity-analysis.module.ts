import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SanctionMaturityAnalysisRoutingModule } from './sanction-maturity-analysis-routing.module';
import { SanctionMaturityAnalysisComponent } from './sanction-maturity-analysis.component';


@NgModule({
  declarations: [SanctionMaturityAnalysisComponent],
  imports: [
    CommonModule,
    SanctionMaturityAnalysisRoutingModule
  ]
})
export class SanctionMaturityAnalysisModule { }
