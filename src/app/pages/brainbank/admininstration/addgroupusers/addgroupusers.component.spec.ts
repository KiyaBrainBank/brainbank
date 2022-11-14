import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgroupusersComponent } from './addgroupusers.component';

describe('AddgroupusersComponent', () => {
  let component: AddgroupusersComponent;
  let fixture: ComponentFixture<AddgroupusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddgroupusersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddgroupusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
