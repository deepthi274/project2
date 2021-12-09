import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementResolvedEmpComponent } from './reimbursement-resolved-emp.component';

describe('ReimbursementResolvedEmpComponent', () => {
  let component: ReimbursementResolvedEmpComponent;
  let fixture: ComponentFixture<ReimbursementResolvedEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReimbursementResolvedEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimbursementResolvedEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
