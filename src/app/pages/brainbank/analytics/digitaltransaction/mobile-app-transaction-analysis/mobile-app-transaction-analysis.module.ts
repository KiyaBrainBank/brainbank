import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileAppTransactionAnalysisRoutingModule } from './mobile-app-transaction-analysis-routing.module';
import { MobileAppTransactionAnalysisComponent } from './mobile-app-transaction-analysis.component';


@NgModule({
  declarations: [MobileAppTransactionAnalysisComponent],
  imports: [
    CommonModule,
    MobileAppTransactionAnalysisRoutingModule
  ]
})
export class MobileAppTransactionAnalysisModule { }
