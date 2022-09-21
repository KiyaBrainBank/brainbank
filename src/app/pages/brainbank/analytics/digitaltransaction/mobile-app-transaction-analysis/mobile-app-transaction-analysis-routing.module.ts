import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileAppTransactionAnalysisComponent } from './mobile-app-transaction-analysis.component';

const routes: Routes = [{
  path:'',
  component:MobileAppTransactionAnalysisComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileAppTransactionAnalysisRoutingModule { }
