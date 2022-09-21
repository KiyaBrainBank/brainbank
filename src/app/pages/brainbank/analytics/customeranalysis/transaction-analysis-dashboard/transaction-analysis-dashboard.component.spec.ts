import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionAnalysisDashboardComponent } from './transaction-analysis-dashboard.component';

describe('TransactionAnalysisDashboardComponent', () => {
  let component: TransactionAnalysisDashboardComponent;
  let fixture: ComponentFixture<TransactionAnalysisDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionAnalysisDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionAnalysisDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
