import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReimbursementHttpService } from '../../reimbursement-http.service';
import { Reimbursement } from '../../reimbursement.model';
@Component({
  selector: 'app-reimbursement-resolved',
  templateUrl: './reimbursement-resolved.component.html',
  styleUrls: ['./reimbursement-resolved.component.css']
})
export class ReimbursementResolvedComponent implements OnInit {

  flag: boolean = false;

  allResolvedRequests: Reimbursement[] = [];

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
    this.loadRequests();
  }

  loadRequests(){
    this.reimbursementHttpService.getAllResolvedRequests().subscribe(
      (response)=> {
        console.log(response);
        this.allResolvedRequests = response;
      },
      (error)=>{
        console.log(error);
        this.errorMsg = 'There was some internal error! Please try again later!';
        console.log(this.errorMsg);
      }  
    );
  }

  getAllResolvedRequests(){
    this.reimbursementHttpService.getAllResolvedRequests().subscribe(
      (response) => {
        console.log(response);
        this.loadRequests();
      },
      (error) => {
        console.log(error);
      }
    )
  }

  deleteRequest(rbId: number){
    this.reimbursementHttpService.deleteRequest(rbId).subscribe(
      (response) => {
        console.log(response);
        this.loadRequests();
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
