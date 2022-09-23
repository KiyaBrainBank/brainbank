import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtmtransactionAnalysisComponent } from './atmtransaction-analysis.component';

const routes: Routes = [{ path: '', component: AtmtransactionAnalysisComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtmtransactionAnalysisRoutingModule { }
