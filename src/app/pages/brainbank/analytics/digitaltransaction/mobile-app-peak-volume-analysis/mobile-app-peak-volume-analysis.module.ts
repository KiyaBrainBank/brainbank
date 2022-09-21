import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileAppPeakVolumeAnalysisRoutingModule } from './mobile-app-peak-volume-analysis-routing.module';
import { MobileAppPeakVolumeAnalysisComponent } from './mobile-app-peak-volume-analysis.component';


@NgModule({
  declarations: [MobileAppPeakVolumeAnalysisComponent],
  imports: [
    CommonModule,
    MobileAppPeakVolumeAnalysisRoutingModule
  ]
})
export class MobileAppPeakVolumeAnalysisModule { }
