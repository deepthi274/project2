import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  flag: boolean = false;

  allUsers: User[] = [];

  errorMsg: string = '';

  newUser: User = {
    userId: 0,
    userPassword: "",
    userFirstName: "",
    userLastName: "",
    userAddress: "",
    userContact: "",
    userType: "employee",
    userRemoved: false
  }

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(){
    this.userService.getAllUsers().subscribe(
      (response)=> {
        console.log(response);
        this.allUsers = response;
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

  register(){
    this.userService.register(this.newUser).subscribe(
      (response)=> {
        console.log(response);
        this.loadUsers();
      },
      (error)=>{
        console.log(error);
        this.errorMsg = 'There was some internal error! Please try again later!'
        console.log(this.errorMsg);
      }

    )
  }

  deleteUser(userId: number){
    this.userService.deleteUser(userId).subscribe(
      (response) => {
        console.log(response);
        this.loadUsers();
      },
      (error) => console.log(error)
    )   
  }

  editUser(){
    this.userService.updateUser(this.newUser).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['user-edit']);
      },
      (error)=> {
        console.log(error);
      }

    )
  }

}
