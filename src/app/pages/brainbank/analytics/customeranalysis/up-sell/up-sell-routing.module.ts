import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpSellComponent } from './up-sell.component';

const routes: Routes = [{
  path:'',
  component:UpSellComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpSellRoutingModule { }
