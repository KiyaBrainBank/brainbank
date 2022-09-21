import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpSellComponent } from './up-sell.component';

describe('UpSellComponent', () => {
  let component: UpSellComponent;
  let fixture: ComponentFixture<UpSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpSellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
