import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtmprofileRoutingModule } from './atmprofile-routing.module';
import { AtmprofileComponent } from './atmprofile.component';
import { UserdetailsModule } from '../../userdetails/userdetails.module';
import 'chartjs-chart-treemap';


@NgModule({
  declarations: [
    AtmprofileComponent
  ],
  imports: [
    CommonModule,
    AtmprofileRoutingModule,
    UserdetailsModule
  ],
  exports :[
    AtmprofileComponent
  ]
})
export class AtmprofileModule { }
