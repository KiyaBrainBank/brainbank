import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppPeakVolumeAnalysisComponent } from './mobile-app-peak-volume-analysis.component';

describe('MobileAppPeakVolumeAnalysisComponent', () => {
  let component: MobileAppPeakVolumeAnalysisComponent;
  let fixture: ComponentFixture<MobileAppPeakVolumeAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileAppPeakVolumeAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileAppPeakVolumeAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
