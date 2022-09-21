import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RewardPointsRecommendationComponent } from './reward-points-recommendation.component';

const routes: Routes = [{path: '', component: RewardPointsRecommendationComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RewardPointsRecommendationRoutingModule { }
