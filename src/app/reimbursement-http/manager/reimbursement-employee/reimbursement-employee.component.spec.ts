import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementEmployeeComponent } from './reimbursement-employee.component';

describe('ReimbursementEmployeeComponent', () => {
  let component: ReimbursementEmployeeComponent;
  let fixture: ComponentFixture<ReimbursementEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReimbursementEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimbursementEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
