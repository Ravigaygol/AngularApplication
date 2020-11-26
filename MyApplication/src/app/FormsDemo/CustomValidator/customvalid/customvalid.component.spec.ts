import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomvalidComponent } from './customvalid.component';

describe('CustomvalidComponent', () => {
  let component: CustomvalidComponent;
  let fixture: ComponentFixture<CustomvalidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomvalidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomvalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
