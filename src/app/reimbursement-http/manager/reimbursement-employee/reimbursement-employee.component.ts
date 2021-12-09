import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/users/user.model';
import { ReimbursementHttpService } from '../../reimbursement-http.service';
import { Reimbursement } from '../../reimbursement.model';
import { AuthService } from 'src/app/users/auth.service';

@Component({
  selector: 'app-reimbursement-employee',
  templateUrl: './reimbursement-employee.component.html',
  styleUrls: ['./reimbursement-employee.component.css']
})
export class ReimbursementEmployeeComponent implements OnInit {

  flag: boolean = false;

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

  userInfo: User = new User();

  constructor(private reimbursementHttpService: ReimbursementHttpService,
              private auth: AuthService,
              private router: Router) { 

    }

  ngOnInit(): void {
    this.userInfo = this.auth.retrieveUser();
    this.loadRequests();
  }

  // getAllUserRequest(){
  //   this.newRequest.userId=this.userInfo.userId;
  //   this.reimbursementHttpService.getSpecificRequests(this.userInfo.userId).subscribe(
  //     (response)=> {
  //       console.log(this.userInfo.userId)
  //       console.log(response);
  //       this.allUserRequests = response;
  //     },
  //     (error) => {
  //       console.log(error);
  //       this.errorMsg = 'There was some internal error! Please try again later!';
  //       console.log(this.errorMsg);
  //     }
  //   )
  // }

  loadRequests(){
    this.newRequest.userId=this.userInfo.userId;
    this.reimbursementHttpService.getSpecificRequests(this.userInfo.userId).subscribe(
      (response)=> {
        console.log("loadrequests"+this.userInfo.userId)
        console.log(response);
        this.allUserRequests = response;
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


}