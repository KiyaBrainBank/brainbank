import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EodconfigurationComponent } from './eodconfiguration.component';

describe('EodconfigurationComponent', () => {
  let component: EodconfigurationComponent;
  let fixture: ComponentFixture<EodconfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EodconfigurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EodconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
