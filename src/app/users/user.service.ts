import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:8080/api/users";

  constructor(private http: HttpClient) { }

  // VIEW ALL EMPLOYEES
  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl+"/employees");
  }

  // VIEW AN EMPLOYEE
  getAUser(userId: number): Observable<User>{
    return this.http.get<User>(this.baseUrl+"/employee/"+userId);
  }

  // UPDATE USER INFO
  updateUser(updateUser: User): Observable<User>{
    return this.http.put<User>(this.baseUrl+"/update/"+updateUser.userId, updateUser);
  }

  // ADD USER
  register(newUser: User): Observable<User>{
    return this.http.post<User>(this.baseUrl+"/register", newUser);
  }

  // DELETE USER
  deleteUser(userId: number): Observable<User>{
    return this.http.delete<User>(this.baseUrl+"/remove/"+userId);
  }

  // VALIDATE USER
  // validateUser(existingUser: User): Observable<User>{
  //   return this.http.get<User>(this.baseUrl+"/login/"+existingUser);
  // }

  validateUser(user: User){
    // consume endpoint to validate the user
    if(user.userId == 1 && user.userPassword == "123456"){
      user.userFirstName = "Michelle";
      user.userLastName = "Ng";
      user.userAddress = "California";
      user.userContact = "333-333-3333";
      user.userType = "manager";
      user.userRemoved = false;
    } else if(user.userId == 2 && user.userPassword == "123456"){
      user.userFirstName = "John";
      user.userLastName = "Doe";
      user.userAddress = "Texas";
      user.userContact = "555-555-5555";
      user.userType = "employee";
      user.userRemoved = false;
    } 
    return user;
  }

}
