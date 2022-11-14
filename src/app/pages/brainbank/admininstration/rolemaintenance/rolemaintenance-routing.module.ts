import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolemaintenanceComponent } from './rolemaintenance.component';

const routes: Routes = [
  {
    path: '', component: RolemaintenanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolemaintenanceRoutingModule { }
