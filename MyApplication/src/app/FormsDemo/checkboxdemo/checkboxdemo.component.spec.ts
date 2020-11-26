import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxdemoComponent } from './checkboxdemo.component';

describe('CheckboxdemoComponent', () => {
  let component: CheckboxdemoComponent;
  let fixture: ComponentFixture<CheckboxdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
