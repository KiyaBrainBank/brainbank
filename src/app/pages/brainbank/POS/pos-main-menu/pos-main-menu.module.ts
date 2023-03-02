import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosMainMenuRoutingModule } from './pos-main-menu-routing.module';
import { UserdetailsModule } from '../../userdetails/userdetails.module';
import { PosMainMenuComponent } from './pos-main-menu.component';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import 'chartjs-chart-treemap';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [PosMainMenuComponent],
  imports: [
    CommonModule,
    PosMainMenuRoutingModule,
    UserdetailsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgChartsModule
  ],
  exports: [
    UserdetailsModule,
  ]
})
export class PosMainMenuModule { }
