import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosMerchantAnalysisComponent } from './pos-merchant-analysis.component';

describe('PosMerchantAnalysisComponent', () => {
  let component: PosMerchantAnalysisComponent;
  let fixture: ComponentFixture<PosMerchantAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosMerchantAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosMerchantAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
