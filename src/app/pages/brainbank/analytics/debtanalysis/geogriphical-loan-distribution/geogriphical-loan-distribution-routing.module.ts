import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeogriphicalLoanDistributionComponent } from './geogriphical-loan-distribution.component';

const routes: Routes = [{
  path:'',
  component:GeogriphicalLoanDistributionComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeogriphicalLoanDistributionRoutingModule { }
