import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerconfigurationComponent } from './serverconfiguration.component';

describe('ServerconfigurationComponent', () => {
  let component: ServerconfigurationComponent;
  let fixture: ComponentFixture<ServerconfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerconfigurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
