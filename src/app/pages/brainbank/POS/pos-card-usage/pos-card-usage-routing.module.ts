import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosCardUsageComponent } from './pos-card-usage.component';

const routes: Routes = [
  { path: '', component: PosCardUsageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosCardUsageRoutingModule { }
