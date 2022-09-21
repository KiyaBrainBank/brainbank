import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileAppPeakVolumeAnalysisComponent } from './mobile-app-peak-volume-analysis.component';

const routes: Routes = [{
  path:'',
  component:MobileAppPeakVolumeAnalysisComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileAppPeakVolumeAnalysisRoutingModule { }
