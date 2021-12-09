import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  updateUser = {
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
    private auth: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder:  FormBuilder) { }

    
    
  ngOnInit(): void {

  //   this.editForm = this.formBuilder.group({
  //     userPassword: ['', Validators.required, "userPassword"],
  //     userFirstName: ['', [Validators.required, "userFirstName"]],
  //     userLastName: ['', [Validators.required, "userLastName"]],
  //     userAddress: ['', [Validators.required, "userAddress"]],
  //     userContact: ['', [Validators.required, ["userContact"]]],
  //   }, 
      
  //   );
  // }

  // get editFormControl() {
  //   return this.editForm.controls;
  // }

  // editSubmit() {
    
  //   if (this.editForm.valid) {
  //     this.submitted = true;
  //     alert('Form Submitted succesfully!!!\n Check the values in browser console.');
  //     console.table(this.editForm.value);
  //   }
  


          
    
   console.log(this.auth);
    this.updateUser = this.auth.retrieveUser();
      
  }

  editUser(){
    this.userService.updateUser(this.updateUser).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['user-edit']);
      },
     
      
      (error)=> {
        console.log(error);
      }
    );
  }
  
  }
    



