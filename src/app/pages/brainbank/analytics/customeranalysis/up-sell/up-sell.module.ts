import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpSellRoutingModule } from './up-sell-routing.module';
import { UpSellComponent } from './up-sell.component';


@NgModule({
  declarations: [UpSellComponent],
  imports: [
    CommonModule,
    UpSellRoutingModule
  ]
})
export class UpSellModule { }
