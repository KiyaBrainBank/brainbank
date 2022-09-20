import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosCardUsageRoutingModule } from './pos-card-usage-routing.module';
import { UserdetailsModule } from '../../userdetails/userdetails.module';
import { PosCardUsageComponent } from './pos-card-usage.component';



@NgModule({
  declarations: [PosCardUsageComponent],
  imports: [
    CommonModule,
    PosCardUsageRoutingModule,
    UserdetailsModule
  ],
  exports: [
    UserdetailsModule
  ]
})
export class PosCardUsageModule { }
