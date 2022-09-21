import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RewardPointsRecommendationRoutingModule } from './reward-points-recommendation-routing.module';
import { RewardPointsRecommendationComponent } from './reward-points-recommendation.component';

@NgModule({
  declarations: [RewardPointsRecommendationComponent],
  imports: [
    CommonModule,
    RewardPointsRecommendationRoutingModule
  ]
})
export class RewardPointsRecommendationModule { }
