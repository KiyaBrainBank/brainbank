import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtmManagementRoutingModule } from './atm-management-routing.module';
import { AtmManagementComponent } from './atm-management.component';


@NgModule({
  declarations: [AtmManagementComponent],
  imports: [
    CommonModule,
    AtmManagementRoutingModule
  ]
})
export class AtmManagementModule { }
