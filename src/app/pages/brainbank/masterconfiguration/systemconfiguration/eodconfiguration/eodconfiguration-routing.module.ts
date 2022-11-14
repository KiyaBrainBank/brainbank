import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EodconfigurationComponent } from './eodconfiguration.component';

const routes: Routes = [{
  path:'', component: EodconfigurationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EodconfigurationRoutingModule { }
