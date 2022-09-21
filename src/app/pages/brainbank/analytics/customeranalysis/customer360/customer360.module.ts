import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Customer360RoutingModule } from './customer360-routing.module';
import { Customer360Component } from './customer360.component';


@NgModule({
  declarations: [Customer360Component],
  imports: [
    CommonModule,
    Customer360RoutingModule
  ]
})
export class Customer360Module { }
