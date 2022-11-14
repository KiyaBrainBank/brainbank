import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingriskweightageconfigurationComponent } from './onboardingriskweightageconfiguration.component';

const routes: Routes = [{
  path:'', component:OnboardingriskweightageconfigurationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingriskweightageconfigurationRoutingModule { }
