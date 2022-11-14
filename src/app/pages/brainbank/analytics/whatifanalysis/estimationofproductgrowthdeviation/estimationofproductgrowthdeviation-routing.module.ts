import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstimationofproductgrowthdeviationComponent } from './estimationofproductgrowthdeviation.component';

const routes: Routes = [{
  path:'', component:EstimationofproductgrowthdeviationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstimationofproductgrowthdeviationRoutingModule { }
