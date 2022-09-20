import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosMerchantAnalysisComponent } from './pos-merchant-analysis.component';

const routes: Routes = [
  { path: '', component: PosMerchantAnalysisComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosMerchantAnalysisRoutingModule { }
