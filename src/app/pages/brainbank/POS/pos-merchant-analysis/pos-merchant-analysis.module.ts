import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosMerchantAnalysisRoutingModule } from './pos-merchant-analysis-routing.module';
import { UserdetailsModule } from '../../userdetails/userdetails.module';
import { PosMerchantAnalysisComponent } from './pos-merchant-analysis.component';


@NgModule({
  declarations: [PosMerchantAnalysisComponent],
  imports: [
    CommonModule,
    PosMerchantAnalysisRoutingModule,
    UserdetailsModule
  ],
  exports: [
    UserdetailsModule
  ]
})
export class PosMerchantAnalysisModule { }
