import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AimlmoduleComponent } from './aimlmodule.component';

describe('AimlmoduleComponent', () => {
  let component: AimlmoduleComponent;
  let fixture: ComponentFixture<AimlmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AimlmoduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AimlmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
