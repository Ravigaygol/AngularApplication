import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAssignmentsComponent } from './angular-assignments.component';

describe('AngularAssignmentsComponent', () => {
  let component: AngularAssignmentsComponent;
  let fixture: ComponentFixture<AngularAssignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularAssignmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
