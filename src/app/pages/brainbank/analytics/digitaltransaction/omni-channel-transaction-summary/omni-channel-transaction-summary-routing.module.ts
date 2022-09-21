import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OmniChannelTransactionSummaryComponent } from './omni-channel-transaction-summary.component';

const routes: Routes = [{
  path:'',
  component:OmniChannelTransactionSummaryComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OmniChannelTransactionSummaryRoutingModule { }
