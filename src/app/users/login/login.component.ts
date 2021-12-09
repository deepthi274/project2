import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  show: boolean = false;

  newUser: User = new User();
  
  errorMessage: String = '';

  constructor(private userService: UserService,
              private authService: AuthService,
              private router: Router) { }
              
              loginForm: any;

              ngOnInit(): void {
                this.loginForm = new FormGroup({
                  "userName":new FormControl(null,[Validators.required,Validators.pattern('[1-20]*')]),
                  "password":new FormControl(null,[Validators.required,Validators.pattern('[1-20]*')]),
                  
                });
            
              }
              submitData()
              {
                console.log(this.loginForm.value);
            
                
              }
            
              get userName() {return this.loginForm.get('userName');}
  
  
  

//   validateLogin(){
//     this.userService.validateUser(this.newUser).subscribe(
//       (response) => {
//         console.log(response);
      
//         if(response.userType == "employee" ){
//               this.authService.storeUser(response);
//               this.authService.isLoggedIn = true;
//               this.router.navigate(['hello-employee'])
//       }else if(response.userType == "manager"){
//               this.authService.storeUser(response);
//               this.authService.isLoggedIn = true;
//               this.router.navigate(['hello-manager'])
//       }else{this.errorMessage="Invalid login, please try again!"};
//     }
// );
// }

validateLogin(){
  var validatedUser: User = this.userService.validateUser(this.newUser);
  if(validatedUser.userType != "" ){
    this.authService.storeUser(validatedUser);
    this.authService.isLoggedIn = true;

  }
  if(validatedUser.userType == "employee" ){
    this.router.navigate(['hello-employee']);
  }else if(validatedUser.userType == "manager" ){
    this.router.navigate(['hello-manager']);
  }
}



  password() {
    this.show = !this.show;
  }  


}
