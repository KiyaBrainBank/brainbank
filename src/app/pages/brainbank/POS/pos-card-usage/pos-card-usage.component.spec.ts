import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosCardUsageComponent } from './pos-card-usage.component';

describe('PosCardUsageComponent', () => {
  let component: PosCardUsageComponent;
  let fixture: ComponentFixture<PosCardUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosCardUsageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosCardUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
