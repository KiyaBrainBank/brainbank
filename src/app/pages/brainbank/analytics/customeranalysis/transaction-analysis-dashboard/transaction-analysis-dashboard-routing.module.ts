import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionAnalysisDashboardComponent } from './transaction-analysis-dashboard.component';

const routes: Routes = [{
  path:'',
  component:TransactionAnalysisDashboardComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionAnalysisDashboardRoutingModule { }
