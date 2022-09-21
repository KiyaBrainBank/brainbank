import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileAppTransactionMarketShareRoutingModule } from './mobile-app-transaction-market-share-routing.module';
import { MobileAppTransactionMarketShareComponent } from './mobile-app-transaction-market-share.component';


@NgModule({
  declarations: [MobileAppTransactionMarketShareComponent],
  imports: [
    CommonModule,
    MobileAppTransactionMarketShareRoutingModule
  ]
})
export class MobileAppTransactionMarketShareModule { }
