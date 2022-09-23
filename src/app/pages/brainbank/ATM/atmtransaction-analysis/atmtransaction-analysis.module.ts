import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtmtransactionAnalysisRoutingModule } from './atmtransaction-analysis-routing.module';
import { AtmtransactionAnalysisComponent } from './atmtransaction-analysis.component';
import { UserdetailsModule } from '../../userdetails/userdetails.module';


@NgModule({
  declarations: [
    AtmtransactionAnalysisComponent
  ],
  imports: [
    CommonModule,
    AtmtransactionAnalysisRoutingModule,
    UserdetailsModule
  ],
  exports :[
    UserdetailsModule
  ]
})
export class AtmtransactionAnalysisModule { }
