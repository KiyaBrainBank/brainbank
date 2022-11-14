import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessconfigurationComponent } from './processconfiguration.component';

const routes: Routes = [{
  path:'', component:ProcessconfigurationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessconfigurationRoutingModule { }
