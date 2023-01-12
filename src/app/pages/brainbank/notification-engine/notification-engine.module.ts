import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationEngineRoutingModule } from './notification-engine-routing.module';
import { NotificationEngineComponent } from './notification-engine.component';


@NgModule({
  declarations: [
    NotificationEngineComponent
  ],
  imports: [
    CommonModule,
    NotificationEngineRoutingModule
  ]
})
export class NotificationEngineModule { }
