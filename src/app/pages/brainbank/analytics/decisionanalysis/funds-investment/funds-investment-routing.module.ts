import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundsInvestmentComponent } from './funds-investment.component';

const routes: Routes = [{ path:'', component : FundsInvestmentComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundsInvestmentRoutingModule { }
