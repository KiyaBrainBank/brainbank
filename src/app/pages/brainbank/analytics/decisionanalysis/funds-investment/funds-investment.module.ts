import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundsInvestmentRoutingModule } from './funds-investment-routing.module';
import { FundsInvestmentComponent } from './funds-investment.component';


@NgModule({
  declarations: [FundsInvestmentComponent],
  imports: [
    CommonModule,
    FundsInvestmentRoutingModule
  ]
})
export class FundsInvestmentModule { }
