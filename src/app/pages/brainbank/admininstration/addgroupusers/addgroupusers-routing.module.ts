import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddgroupusersComponent } from './addgroupusers.component';

const routes: Routes = [{path: '', component: AddgroupusersComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddgroupusersRoutingModule { }
