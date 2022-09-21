import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileAppTransactionMarketShareComponent } from './mobile-app-transaction-market-share.component';

const routes: Routes = [{
  path:'',
  component:MobileAppTransactionMarketShareComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileAppTransactionMarketShareRoutingModule { }
