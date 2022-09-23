import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmtransactionAnalysisComponent } from './atmtransaction-analysis.component';

describe('AtmtransactionAnalysisComponent', () => {
  let component: AtmtransactionAnalysisComponent;
  let fixture: ComponentFixture<AtmtransactionAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmtransactionAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtmtransactionAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
