import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformativeconfigurationComponent } from './informativeconfiguration.component';

const routes: Routes = [{
  path:'', component:InformativeconfigurationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformativeconfigurationRoutingModule { }
