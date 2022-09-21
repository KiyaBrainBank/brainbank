import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeogriphicalLoanDistributionRoutingModule } from './geogriphical-loan-distribution-routing.module';
import { GeogriphicalLoanDistributionComponent } from './geogriphical-loan-distribution.component';


@NgModule({
  declarations: [GeogriphicalLoanDistributionComponent],
  imports: [
    CommonModule,
    GeogriphicalLoanDistributionRoutingModule
  ]
})
export class GeogriphicalLoanDistributionModule { }
