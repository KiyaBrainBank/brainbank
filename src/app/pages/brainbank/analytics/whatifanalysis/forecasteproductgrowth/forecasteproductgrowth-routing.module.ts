import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecasteproductgrowthComponent } from './forecasteproductgrowth.component';

const routes: Routes = [{
  path:'', component:ForecasteproductgrowthComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForecasteproductgrowthRoutingModule { }
