import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemparameterComponent } from './systemparameter.component';

const routes: Routes = [{
  path:'', component:SystemparameterComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemparameterRoutingModule { }
