import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReimbursementHttpService } from '../../reimbursement-http.service';
import { Reimbursement } from '../../reimbursement.model';

@Component({
  selector: 'app-reimbursement-pending',
  templateUrl: './reimbursement-pending.component.html',
  styleUrls: ['./reimbursement-pending.component.css']
})
export class ReimbursementPendingComponent implements OnInit {

  flag: boolean = false;

  allPendingRequests: Reimbursement[] = [];
  allUserRequests: Reimbursement[] = [];

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
    this.reimbursementHttpService.getAllPendingRequests().subscribe(
      (response)=> {
        console.log(response);
        this.allPendingRequests = response;
      },
      (error)=>{
        console.log(error);
        this.errorMsg = 'There was some internal error! Please try again later!';
        console.log(this.errorMsg);
      }  
    );
  }

  manageRequest(rbId: number){
    this.reimbursementHttpService.manageRequest(rbId).subscribe(
      (response)=> {
        console.log(response);
        this.loadRequests();
      },
      (error) => {
        console.log(error);
      }
    )
  }

  denyRequest(rbId: number){
    this.reimbursementHttpService.denyRequest(rbId).subscribe(
      (response)=> {
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

  addReimbursement(){
    this.reimbursementHttpService.submitRequest(this.newRequest).subscribe(
      (response)=> {
        console.log(response);
        this.loadRequests();
      },
      (error) => {
        console.log(error);
      }
    )
  }

  toggleAdd(){
    if(this.flag){
      this.flag = false;
    }else{
      this.flag = true;
    }
  }

  getAllUserRequest(userId: number){
    this.reimbursementHttpService.getSpecificRequests(userId).subscribe(
      (response)=> {
        console.log(response);
        this.allUserRequests = response;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  goToEditComponent(rbId: any){
    console.log("logged: " + rbId);
    this.router.navigate(['reimbursement-edit'])
  }

}