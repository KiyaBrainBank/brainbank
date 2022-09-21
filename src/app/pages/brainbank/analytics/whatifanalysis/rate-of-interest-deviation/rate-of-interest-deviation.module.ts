import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RateOfInterestDeviationRoutingModule } from './rate-of-interest-deviation-routing.module';
import { RateOfInterestDeviationComponent } from './rate-of-interest-deviation.component';

@NgModule({
  declarations: [RateOfInterestDeviationComponent],
  imports: [
    CommonModule,
    RateOfInterestDeviationRoutingModule
  ]
})
export class RateOfInterestDeviationModule { }
