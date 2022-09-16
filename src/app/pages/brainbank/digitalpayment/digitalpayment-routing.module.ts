import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigitalpaymentComponent } from './digitalpayment.component';

const routes: Routes = [ 
  {path : '' , component: DigitalpaymentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigitalpaymentRoutingModule { }
