import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndividualCustomerAnalysisRoutingModule } from './individual-customer-analysis-routing.module';
import { IndividualCustomerAnalysisComponent } from './individual-customer-analysis.component';


@NgModule({
  declarations: [IndividualCustomerAnalysisComponent],
  imports: [
    CommonModule,
    IndividualCustomerAnalysisRoutingModule
  ]
})
export class IndividualCustomerAnalysisModule { }
