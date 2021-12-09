import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReimbursementHttpService } from '../../reimbursement-http.service';
import { Reimbursement } from '../../reimbursement.model';

@Component({
  selector: 'app-reimbursement-resolved-emp',
  templateUrl: './reimbursement-resolved-emp.component.html',
  styleUrls: ['./reimbursement-resolved-emp.component.css']
})
export class ReimbursementResolvedEmpComponent implements OnInit {

  flag: boolean = false;

  ResolvedRequests: Reimbursement[] = [];

  errorMsg: string = '';

  newRequest: Reimbursement = {
    rbId: 0,
    userId: 0,
    rbDate: "",
    rbAmount: 0,
    rbStatus: "",
    rbResolved: false,
    rbRemoved: false
  }

  constructor(private reimbursementHttpService: ReimbursementHttpService,
              private router: Router) { 

    }

  ngOnInit(): void {
    this.loadRequests(2); // HAVE TO HARDCODE PASS IN USERID (NEED NEW SOLUTION)
  }

  loadRequests(userId: number){
    this.reimbursementHttpService.getResolvedRequests(userId).subscribe(
      (response)=> {
        console.log(response);
        this.ResolvedRequests = response;
      },
      (error)=>{
        console.log(error);
        this.errorMsg = 'There was some internal error! Please try again later!';
        console.log(this.errorMsg);
      }  
    );
  }

  getResolvedRequests(userId: number){
    this.reimbursementHttpService.getResolvedRequests(userId).subscribe(
      (response) => {
        console.log(response);
        this.loadRequests(userId);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
