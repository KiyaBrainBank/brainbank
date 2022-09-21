import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppTransactionMarketShareComponent } from './mobile-app-transaction-market-share.component';

describe('MobileAppTransactionMarketShareComponent', () => {
  let component: MobileAppTransactionMarketShareComponent;
  let fixture: ComponentFixture<MobileAppTransactionMarketShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileAppTransactionMarketShareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileAppTransactionMarketShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
