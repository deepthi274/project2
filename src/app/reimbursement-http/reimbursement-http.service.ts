import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../users/auth.service';
import { Reimbursement } from './reimbursement.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReimbursementHttpService {

  baseUrl = "http://localhost:8080/api/reimbursements";

  constructor(private http: HttpClient, 
              private auth: AuthService,
              private router: Router) {

              
  }

  // GET A REIMBURSEMENT
  getAReimbursement(rbId: number): Observable<Reimbursement>{
    return this.http.get<Reimbursement>(this.baseUrl+"/"+rbId);
  }

  // ALL PENDING (MANAGER)
  getAllPendingRequests(): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(this.baseUrl+"/manager/view/pending");
  }

  // ALL RESOLVED (MANAGER)
  getAllResolvedRequests(): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(this.baseUrl+"/manager/resolved");
  }

  // AlL SPECIFIC EMPLOYEE (MANAGER)
  getSpecificRequests(userId: number): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(this.baseUrl+"/all/employee/"+userId);
  }

  // PENDING (EMPLOYEE)
  getPendingRequests(userId: number): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(this.baseUrl+"/pending/employee/"+userId);
  }

  // RESOLVED (EMPLOYEE)
  getResolvedRequests(userId: number): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(this.baseUrl+"/resolved/employee/"+userId);
  }

  // DELETE REIMBURSEMENT
  deleteRequest(rbId: number): Observable<Reimbursement>{
    return this.http.delete<Reimbursement>(this.baseUrl+"/remove/"+rbId);
  }

  // ADD REIMBURSEMENT
  submitRequest(addReimbursement: Reimbursement): Observable<Reimbursement>{
    return this.http.post<Reimbursement>(this.baseUrl+"/add", addReimbursement);
  }

  // UPDATE REIMBURSEMENT
  updateReimbursement(updateReimbursement: Reimbursement): Observable<Reimbursement>{
    return this.http.put<Reimbursement>(this.baseUrl+"/update/"+updateReimbursement.rbId, updateReimbursement);
  }

  // APPROVE REIMBURSEMENT
  manageRequest(rbId: number): Observable<Reimbursement>{
    return this.http.delete<Reimbursement>(this.baseUrl+"/approve/"+rbId);
  }

  // DENY REIMBURSEMENT
  denyRequest(rbId: number): Observable<Reimbursement>{
    return this.http.delete<Reimbursement>(this.baseUrl+"/deny/"+rbId);
  }

  // GO TO EDIT COMPONENT
  goToEditComponent(rbId: any){
    this.router.navigate(['reimbursement-edit', rbId])
  }



}
