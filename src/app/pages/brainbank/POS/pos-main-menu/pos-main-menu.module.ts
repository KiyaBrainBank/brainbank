import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosMainMenuRoutingModule } from './pos-main-menu-routing.module';
import { UserdetailsModule } from '../../userdetails/userdetails.module';
import { PosMainMenuComponent } from './pos-main-menu.component';


@NgModule({
  declarations: [PosMainMenuComponent],
  imports: [
    CommonModule,
    PosMainMenuRoutingModule,
    UserdetailsModule
  ],
  exports: [
    UserdetailsModule
  ]
})
export class PosMainMenuModule { }
