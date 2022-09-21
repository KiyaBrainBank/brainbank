import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Customer360Component } from './customer360.component';

const routes: Routes = [{
  path:'',
  component:Customer360Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Customer360RoutingModule { }
