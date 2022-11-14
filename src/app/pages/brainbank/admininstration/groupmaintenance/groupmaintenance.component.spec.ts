import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupmaintenanceComponent } from './groupmaintenance.component';

describe('GroupmaintenanceComponent', () => {
  let component: GroupmaintenanceComponent;
  let fixture: ComponentFixture<GroupmaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupmaintenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupmaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
