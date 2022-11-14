import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsermaintenanceComponent } from './usermaintenance.component';

const routes: Routes = [{
  path: '', component: UsermaintenanceComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsermaintenanceRoutingModule { }
