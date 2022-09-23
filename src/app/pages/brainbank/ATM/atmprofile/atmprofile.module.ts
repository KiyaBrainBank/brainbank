import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtmprofileRoutingModule } from './atmprofile-routing.module';
import { AtmprofileComponent } from './atmprofile.component';


@NgModule({
  declarations: [
    AtmprofileComponent
  ],
  imports: [
    CommonModule,
    AtmprofileRoutingModule
  ]
})
export class AtmprofileModule { }
