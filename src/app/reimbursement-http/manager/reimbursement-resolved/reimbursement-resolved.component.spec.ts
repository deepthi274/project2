import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementResolvedComponent } from './reimbursement-resolved.component';

describe('ReimbursementResolvedComponent', () => {
  let component: ReimbursementResolvedComponent;
  let fixture: ComponentFixture<ReimbursementResolvedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReimbursementResolvedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimbursementResolvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
