import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanForecastingComponent } from './loan-forecasting.component';

const routes: Routes = [{
  path:'',
  component:LoanForecastingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanForecastingRoutingModule { }
