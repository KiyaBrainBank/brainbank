import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrossSellComponent } from './cross-sell.component';

const routes: Routes = [{
  path:'',
  component:CrossSellComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrossSellRoutingModule { }
