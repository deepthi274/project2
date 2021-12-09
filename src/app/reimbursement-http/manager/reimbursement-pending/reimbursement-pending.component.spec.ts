import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementPendingComponent } from './reimbursement-pending.component';

describe('ReimbursementPendingComponent', () => {
  let component: ReimbursementPendingComponent;
  let fixture: ComponentFixture<ReimbursementPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReimbursementPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimbursementPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
