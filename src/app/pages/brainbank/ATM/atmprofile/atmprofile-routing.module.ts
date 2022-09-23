import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtmprofileComponent } from './atmprofile.component';

const routes: Routes = [{ path: '', component: AtmprofileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtmprofileRoutingModule { }
