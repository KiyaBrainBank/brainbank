import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigitalpaymentRoutingModule } from './digitalpayment-routing.module';
import { DigitalpaymentComponent } from './digitalpayment.component';


@NgModule({
  declarations: [DigitalpaymentComponent],
  imports: [
    CommonModule,
    DigitalpaymentRoutingModule
  ],
  exports:[DigitalpaymentComponent]
})
export class DigitalpaymentModule { }
