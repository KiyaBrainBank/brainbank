import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SanctionMaturityAnalysisComponent } from './sanction-maturity-analysis.component';

const routes: Routes = [{
  path:'',
  component:SanctionMaturityAnalysisComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SanctionMaturityAnalysisRoutingModule { }
