import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtmdetailsRoutingModule } from './atmdetails-routing.module';
import { AtmdetailsComponent } from './atmdetails.component';
import { UserdetailsModule } from '../userdetails/userdetails.module';


@NgModule({
  declarations: [ 
    AtmdetailsComponent
  ],
  imports: [
    CommonModule,
    AtmdetailsRoutingModule,
    UserdetailsModule
  ],
  exports:[
    UserdetailsModule
  ]
})
export class AtmdetailsModule { }
