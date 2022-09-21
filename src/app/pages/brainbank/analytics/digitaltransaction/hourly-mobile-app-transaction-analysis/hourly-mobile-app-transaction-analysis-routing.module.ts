import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HourlyMobileAppTransactionAnalysisComponent } from './hourly-mobile-app-transaction-analysis.component';

const routes: Routes = [{
  path:'',
  component:HourlyMobileAppTransactionAnalysisComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HourlyMobileAppTransactionAnalysisRoutingModule { }
