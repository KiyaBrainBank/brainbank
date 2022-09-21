import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRiskRoutingModule } from './customer-risk-routing.module';
import { CustomerRiskComponent } from './customer-risk.component';


@NgModule({
  declarations: [CustomerRiskComponent],
  imports: [
    CommonModule,
    CustomerRiskRoutingModule
  ]
})
export class CustomerRiskModule { }
