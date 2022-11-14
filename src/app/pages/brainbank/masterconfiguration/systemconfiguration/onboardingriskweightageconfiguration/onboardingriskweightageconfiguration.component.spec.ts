import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingriskweightageconfigurationComponent } from './onboardingriskweightageconfiguration.component';

describe('OnboardingriskweightageconfigurationComponent', () => {
  let component: OnboardingriskweightageconfigurationComponent;
  let fixture: ComponentFixture<OnboardingriskweightageconfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingriskweightageconfigurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingriskweightageconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
