import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HierarchymaintenanceComponent } from './hierarchymaintenance.component';

const routes: Routes = [{
  path:'', component:HierarchymaintenanceComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HierarchymaintenanceRoutingModule { }
