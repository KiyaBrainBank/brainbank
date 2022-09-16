import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtmdetailsComponent } from './atmdetails.component';

const routes: Routes = [
  {
    path:'',
    component:AtmdetailsComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtmdetailsRoutingModule { }
