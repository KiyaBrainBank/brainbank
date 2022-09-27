import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UserdetailsModule } from '../userdetails/userdetails.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    UserdetailsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  exports :[
    UserdetailsModule
  ]
})
export class DashboardModule { }
