import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupmaintenanceComponent } from './groupmaintenance.component';

const routes: Routes = [{
  path: '', component: GroupmaintenanceComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupmaintenanceRoutingModule { }
