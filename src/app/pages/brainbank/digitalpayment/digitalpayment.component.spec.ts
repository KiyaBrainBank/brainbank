import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalpaymentComponent } from './digitalpayment.component';

describe('DigitalpaymentComponent', () => {
  let component: DigitalpaymentComponent;
  let fixture: ComponentFixture<DigitalpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalpaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
