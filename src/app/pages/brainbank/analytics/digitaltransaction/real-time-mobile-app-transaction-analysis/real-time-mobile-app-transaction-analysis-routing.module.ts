import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealTimeMobileAppTransactionAnalysisComponent } from './real-time-mobile-app-transaction-analysis.component';

const routes: Routes = [{
  path:'',
  component:RealTimeMobileAppTransactionAnalysisComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealTimeMobileAppTransactionAnalysisRoutingModule { }
