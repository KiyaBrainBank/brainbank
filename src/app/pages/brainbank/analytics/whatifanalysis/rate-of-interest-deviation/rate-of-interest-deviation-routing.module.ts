import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RateOfInterestDeviationComponent } from '../rate-of-interest-deviation/rate-of-interest-deviation.component';

const routes: Routes = [{path : '', component: RateOfInterestDeviationComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RateOfInterestDeviationRoutingModule { }
