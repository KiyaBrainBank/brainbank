import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessconfigurationComponent } from './processconfiguration.component';

describe('ProcessconfigurationComponent', () => {
  let component: ProcessconfigurationComponent;
  let fixture: ComponentFixture<ProcessconfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessconfigurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
