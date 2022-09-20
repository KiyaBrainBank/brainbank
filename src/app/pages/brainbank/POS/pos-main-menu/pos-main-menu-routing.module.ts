import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosMainMenuComponent } from './pos-main-menu.component';

const routes: Routes = [
  { path: '', component: PosMainMenuComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosMainMenuRoutingModule { }
