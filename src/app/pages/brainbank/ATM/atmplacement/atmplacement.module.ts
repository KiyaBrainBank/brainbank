import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtmplacementRoutingModule } from './atmplacement-routing.module';
import { AtmplacementComponent } from './atmplacement.component';
import { UserdetailsModule } from '../../userdetails/userdetails.module';
import 'chartjs-chart-treemap';


@NgModule({
  declarations: [
    AtmplacementComponent
  ],
  imports: [
    CommonModule,
    AtmplacementRoutingModule,
    UserdetailsModule
  ],
  exports :[
    AtmplacementComponent
  ]
})
export class AtmplacementModule { }
