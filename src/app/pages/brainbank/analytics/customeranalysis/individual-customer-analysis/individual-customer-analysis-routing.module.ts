import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndividualCustomerAnalysisComponent } from './individual-customer-analysis.component';

const routes: Routes = [{
  path:'',
  component:IndividualCustomerAnalysisComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndividualCustomerAnalysisRoutingModule { }
