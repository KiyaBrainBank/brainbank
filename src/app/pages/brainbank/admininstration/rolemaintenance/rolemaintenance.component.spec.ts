import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolemaintenanceComponent } from './rolemaintenance.component';

describe('RolemaintenanceComponent', () => {
  let component: RolemaintenanceComponent;
  let fixture: ComponentFixture<RolemaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolemaintenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolemaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
