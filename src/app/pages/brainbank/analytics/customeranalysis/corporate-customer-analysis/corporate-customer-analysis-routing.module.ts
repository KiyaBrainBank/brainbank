import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorporateCustomerAnalysisComponent } from './corporate-customer-analysis.component';

const routes: Routes = [
  {
    path:'',
    component:CorporateCustomerAnalysisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporateCustomerAnalysisRoutingModule { }
