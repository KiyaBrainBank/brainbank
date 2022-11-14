import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductperformancebasedontargetComponent } from './productperformancebasedontarget.component';

describe('ProductperformancebasedontargetComponent', () => {
  let component: ProductperformancebasedontargetComponent;
  let fixture: ComponentFixture<ProductperformancebasedontargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductperformancebasedontargetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductperformancebasedontargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
