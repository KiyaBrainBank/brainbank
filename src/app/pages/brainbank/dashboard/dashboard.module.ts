import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UserdetailsModule } from '../userdetails/userdetails.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    UserdetailsModule
  ],
  exports :[
    UserdetailsModule
  ]
})
export class DashboardModule { }
