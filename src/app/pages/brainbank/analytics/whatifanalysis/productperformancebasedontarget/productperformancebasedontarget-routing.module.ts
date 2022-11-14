import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductperformancebasedontargetComponent } from './productperformancebasedontarget.component';

const routes: Routes = [{
  path:'', component:ProductperformancebasedontargetComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductperformancebasedontargetRoutingModule { }
