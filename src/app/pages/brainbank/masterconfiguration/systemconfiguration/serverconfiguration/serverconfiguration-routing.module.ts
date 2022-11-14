import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServerconfigurationComponent } from './serverconfiguration.component';

const routes: Routes = [{
  path:'', component:ServerconfigurationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServerconfigurationRoutingModule { }
