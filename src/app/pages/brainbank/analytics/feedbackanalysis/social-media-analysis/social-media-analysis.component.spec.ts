import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaAnalysisComponent } from './social-media-analysis.component';

describe('SocialMediaAnalysisComponent', () => {
  let component: SocialMediaAnalysisComponent;
  let fixture: ComponentFixture<SocialMediaAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediaAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
