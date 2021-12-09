import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/users/auth.service';
import { ReimbursementHttpService } from '../../reimbursement-http.service';

@Component({
  selector: 'app-reimbursement-edit',
  templateUrl: './reimbursement-edit.component.html',
  styleUrls: ['./reimbursement-edit.component.css']
})
export class ReimbursementEditComponent implements OnInit {
  

  updateReimbursement = {
    rbId: 0,
    userId: 0,
    rbDate: "",
    rbAmount: 0,
    rbStatus: "",
    rbResolved: false,
    rbRemoved: false
  }

  constructor(private reimbursementHttpService: ReimbursementHttpService,
    private auth: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.auth);
    // this.updateReimbursement = this.auth.retrieveReimbursement();
      
  }

  editReimbursement(){
    this.reimbursementHttpService.updateReimbursement(this.updateReimbursement).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['reimbursement-edit']);
      },
      (error)=> {
        console.log(error);
      }
    );
  }

}