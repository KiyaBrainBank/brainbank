import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateCustomerAnalysisRoutingModule } from './corporate-customer-analysis-routing.module';
import { CorporateCustomerAnalysisComponent } from './corporate-customer-analysis.component';


@NgModule({
  declarations: [CorporateCustomerAnalysisComponent],
  imports: [
    CommonModule,
    CorporateCustomerAnalysisRoutingModule
  ]
})
export class CorporateCustomerAnalysisModule { }
