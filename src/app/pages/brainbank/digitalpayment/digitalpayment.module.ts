import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigitalpaymentRoutingModule } from './digitalpayment-routing.module';
import { DigitalpaymentComponent } from './digitalpayment.component';
import { UserdetailsModule } from '../userdetails/userdetails.module';


@NgModule({
  declarations: [DigitalpaymentComponent],
  imports: [
    CommonModule,
    DigitalpaymentRoutingModule,
    UserdetailsModule
  ],
  exports:[UserdetailsModule]
})
export class DigitalpaymentModule { }
