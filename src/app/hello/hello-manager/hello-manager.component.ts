import { Component, OnInit } from '@angular/core';
import { Reimbursement } from 'src/app/reimbursement-http/reimbursement.model';
import { AuthService } from 'src/app/users/auth.service';
import { Router } from '@angular/router';
import { ReimbursementHttpService } from 'src/app/reimbursement-http/reimbursement-http.service';

@Component({
  selector: 'app-hello-manager',
  templateUrl: './hello-manager.component.html',
  styleUrls: ['./hello-manager.component.css']
})
export class HelloManagerComponent implements OnInit {

  flag: boolean = false;

  allPendingRequests: Reimbursement[] = [];

  message = "";

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
              private auth: AuthService,
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

  toggleAdd(){
    if(this.flag){
      this.flag = false;
    }else{
      this.flag = true;
    }
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

  getPendingRequests(userId: number){
    this.reimbursementHttpService.getPendingRequests(userId).subscribe(
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

  display(){
    if(this.flag){
      this.message = "Good Evening!!";
      this.flag = false;
    }else{
      this.message = "";
      this.flag = true;
    }
    
  }


}