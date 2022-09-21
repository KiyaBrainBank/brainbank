import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotAnalysisComponent } from './bot-analysis.component';

const routes: Routes = [{path : '', component: BotAnalysisComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BotAnalysisRoutingModule { }
