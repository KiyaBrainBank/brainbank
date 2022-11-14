import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolidayweekendComponent } from './holidayweekend.component';

const routes: Routes = [{
  path:'', component:HolidayweekendComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolidayweekendRoutingModule { }
