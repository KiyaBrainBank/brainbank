import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosMainMenuComponent } from './pos-main-menu.component';

describe('PosMainMenuComponent', () => {
  let component: PosMainMenuComponent;
  let fixture: ComponentFixture<PosMainMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosMainMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
