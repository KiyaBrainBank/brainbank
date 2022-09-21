import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerRiskComponent } from './customer-risk.component';

const routes: Routes = [{
  path:'',
  component:CustomerRiskComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRiskRoutingModule { }
