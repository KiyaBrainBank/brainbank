import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchymaintenanceComponent } from './hierarchymaintenance.component';

describe('HierarchymaintenanceComponent', () => {
  let component: HierarchymaintenanceComponent;
  let fixture: ComponentFixture<HierarchymaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HierarchymaintenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HierarchymaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
