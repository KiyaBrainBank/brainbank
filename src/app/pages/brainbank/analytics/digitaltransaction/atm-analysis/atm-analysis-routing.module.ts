import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtmAnalysisComponent } from './atm-analysis.component';

const routes: Routes = [{
  path:'',
  component:AtmAnalysisComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtmAnalysisRoutingModule { }
