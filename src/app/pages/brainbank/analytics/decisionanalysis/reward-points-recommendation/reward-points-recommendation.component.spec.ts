import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardPointsRecommendationComponent } from './reward-points-recommendation.component';

describe('RewardPointsRecommendationComponent', () => {
  let component: RewardPointsRecommendationComponent;
  let fixture: ComponentFixture<RewardPointsRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardPointsRecommendationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RewardPointsRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
