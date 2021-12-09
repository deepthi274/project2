import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/users/auth.service';
import { User } from 'src/app/users/user.model';
import { ReimbursementHttpService } from '../../reimbursement-http.service';
import { Reimbursement } from '../../reimbursement.model';

@Component({
  selector: 'app-reimbursement-submit',
  templateUrl: './reimbursement-submit.component.html',
  styleUrls: ['./reimbursement-submit.component.css']
})
export class ReimbursementSubmitComponent implements OnInit {

  flag: boolean = false;

  PendingRequests: Reimbursement[] = [];

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

  userInfo: User = new User();

  constructor(private reimbursementHttpService: ReimbursementHttpService,
              private auth: AuthService,
              private router: Router) { 

    }

  ngOnInit(): void {
    this.userInfo = this.auth.retrieveUser();
    this.loadRequests();
  }

  loadRequests(){
    this.reimbursementHttpService.getPendingRequests(this.userInfo.userId).subscribe(
      (response)=> {
        console.log(this.userInfo.userId)
        console.log(response);
        this.PendingRequests = response;
      },
      (error)=>{
        console.log(error);
        this.errorMsg = 'There was some internal error! Please try again later!';
        console.log(this.errorMsg);
      }  
    );
  }

  toggleAdd(){
    if(this.flag){
      this.flag = false;
    }else{
      this.flag = true;
    }
  }

  addReimbursement(){
    this.newRequest.userId=this.userInfo.userId;
    this.reimbursementHttpService.submitRequest(this.newRequest).subscribe(
      (response)=> {
        console.log(response);
        this.loadRequests();
        console.log(this.userInfo.userId);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  getPendingRequests(){
    this.reimbursementHttpService.getPendingRequests(this.userInfo.userId).subscribe(
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

  goToEditComponent(rbId: any){
    console.log("logged: " + rbId);
    this.router.navigate(['reimbursement-edit'])
  }

  editReimbursement(){
    this.reimbursementHttpService.updateReimbursement(this.newRequest).subscribe(
      (response) => {
        console.log(response);
        // this.router.navigate(['reimbursement-edit']);
      },
      (error)=> {
        console.log(error);
      }
    );
  }

}
