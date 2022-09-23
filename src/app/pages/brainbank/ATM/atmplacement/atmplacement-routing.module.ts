import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtmplacementComponent } from './atmplacement.component';

const routes: Routes = [{ path: '', component: AtmplacementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtmplacementRoutingModule { }
