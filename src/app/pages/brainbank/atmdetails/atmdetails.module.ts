import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtmdetailsRoutingModule } from './atmdetails-routing.module';
import { AtmdetailsComponent } from './atmdetails.component';


@NgModule({
  declarations: [ 
    AtmdetailsComponent
  ],
  imports: [
    CommonModule,
    AtmdetailsRoutingModule
  ],
  exports:[
    AtmdetailsComponent
  ]
})
export class AtmdetailsModule { }
