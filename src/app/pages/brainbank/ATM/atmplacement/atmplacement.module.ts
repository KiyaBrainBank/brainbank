import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtmplacementRoutingModule } from './atmplacement-routing.module';
import { AtmplacementComponent } from './atmplacement.component';


@NgModule({
  declarations: [
    AtmplacementComponent
  ],
  imports: [
    CommonModule,
    AtmplacementRoutingModule
  ]
})
export class AtmplacementModule { }
