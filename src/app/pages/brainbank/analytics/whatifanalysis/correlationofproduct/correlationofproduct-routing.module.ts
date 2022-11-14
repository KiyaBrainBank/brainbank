import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorrelationofproductComponent } from './correlationofproduct.component';

const routes: Routes = [{
  path:'', component:CorrelationofproductComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorrelationofproductRoutingModule { }
