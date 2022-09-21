import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanForecastingRoutingModule } from './loan-forecasting-routing.module';
import { LoanForecastingComponent } from './loan-forecasting.component';


@NgModule({
  declarations: [LoanForecastingComponent],
  imports: [
    CommonModule,
    LoanForecastingRoutingModule
  ]
})
export class LoanForecastingModule { }
