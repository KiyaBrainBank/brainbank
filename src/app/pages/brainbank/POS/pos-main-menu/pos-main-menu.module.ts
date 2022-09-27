import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosMainMenuRoutingModule } from './pos-main-menu-routing.module';
import { UserdetailsModule } from '../../userdetails/userdetails.module';
import { PosMainMenuComponent } from './pos-main-menu.component';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
@NgModule({
  declarations: [PosMainMenuComponent],
  imports: [
    CommonModule,
    PosMainMenuRoutingModule,
    UserdetailsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  exports: [
    UserdetailsModule
  ]
})
export class PosMainMenuModule { }
