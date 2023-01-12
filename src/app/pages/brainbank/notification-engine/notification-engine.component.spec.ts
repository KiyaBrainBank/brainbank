import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationEngineComponent } from './notification-engine.component';

describe('NotificationEngineComponent', () => {
  let component: NotificationEngineComponent;
  let fixture: ComponentFixture<NotificationEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationEngineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
