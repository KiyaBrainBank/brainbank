import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformativeconfigurationComponent } from './informativeconfiguration.component';

describe('InformativeconfigurationComponent', () => {
  let component: InformativeconfigurationComponent;
  let fixture: ComponentFixture<InformativeconfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformativeconfigurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformativeconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
