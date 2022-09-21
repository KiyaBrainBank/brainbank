import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OmniChannelTransactionSummaryRoutingModule } from './omni-channel-transaction-summary-routing.module';
import { OmniChannelTransactionSummaryComponent } from './omni-channel-transaction-summary.component';


@NgModule({
  declarations: [OmniChannelTransactionSummaryComponent],
  imports: [
    CommonModule,
    OmniChannelTransactionSummaryRoutingModule
  ]
})
export class OmniChannelTransactionSummaryModule { }
