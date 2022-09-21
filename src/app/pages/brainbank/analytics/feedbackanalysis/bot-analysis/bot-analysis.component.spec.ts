import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotAnalysisComponent } from './bot-analysis.component';

describe('BotAnalysisComponent', () => {
  let component: BotAnalysisComponent;
  let fixture: ComponentFixture<BotAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
