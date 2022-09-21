import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionAnalysisDashboardRoutingModule } from './transaction-analysis-dashboard-routing.module';
import { TransactionAnalysisDashboardComponent } from './transaction-analysis-dashboard.component';


@NgModule({
  declarations: [TransactionAnalysisDashboardComponent],
  imports: [
    CommonModule,
    TransactionAnalysisDashboardRoutingModule
  ]
})
export class TransactionAnalysisDashboardModule { }
