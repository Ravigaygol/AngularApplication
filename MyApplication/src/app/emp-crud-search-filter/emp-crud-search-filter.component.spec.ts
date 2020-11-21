import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCRUDSearchFilterComponent } from './emp-crud-search-filter.component';

describe('EmpCRUDSearchFilterComponent', () => {
  let component: EmpCRUDSearchFilterComponent;
  let fixture: ComponentFixture<EmpCRUDSearchFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpCRUDSearchFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpCRUDSearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
