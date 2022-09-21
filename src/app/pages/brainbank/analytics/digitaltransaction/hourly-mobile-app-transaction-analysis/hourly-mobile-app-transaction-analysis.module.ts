import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HourlyMobileAppTransactionAnalysisRoutingModule } from './hourly-mobile-app-transaction-analysis-routing.module';
import { HourlyMobileAppTransactionAnalysisComponent } from './hourly-mobile-app-transaction-analysis.component';


@NgModule({
  declarations: [HourlyMobileAppTransactionAnalysisComponent],
  imports: [
    CommonModule,
    HourlyMobileAppTransactionAnalysisRoutingModule
  ]
})
export class HourlyMobileAppTransactionAnalysisModule { }
