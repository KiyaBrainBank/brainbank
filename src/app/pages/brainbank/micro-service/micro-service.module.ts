import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MicroServiceRoutingModule } from './micro-service-routing.module';
import { MicroServiceComponent } from './micro-service.component';


@NgModule({
  declarations: [
    MicroServiceComponent
  ],
  imports: [
    CommonModule,
    MicroServiceRoutingModule
  ]
})
export class MicroServiceModule { }
