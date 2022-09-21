import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrossSellRoutingModule } from './cross-sell-routing.module';
import { CrossSellComponent } from './cross-sell.component';


@NgModule({
  declarations: [CrossSellComponent],
  imports: [
    CommonModule,
    CrossSellRoutingModule
  ]
})
export class CrossSellModule { }
