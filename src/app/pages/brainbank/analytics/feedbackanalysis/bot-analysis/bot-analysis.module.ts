import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotAnalysisRoutingModule } from './bot-analysis-routing.module';
import { BotAnalysisComponent } from './bot-analysis.component';


@NgModule({
  declarations: [BotAnalysisComponent],
  imports: [
    CommonModule,
    BotAnalysisRoutingModule
  ]
})
export class BotAnalysisModule { }
