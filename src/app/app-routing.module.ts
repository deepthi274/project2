import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloManagerComponent } from './hello/hello-manager/hello-manager.component';
import { HelloEmployeeComponent } from './hello/hello-employee/hello-employee.component';
import { LoginComponent } from './users/login/login.component';
import { LogoutComponent } from './users/logout/logout.component';
import { AdminGuard } from './users/admin.guard';
import { ReimbursementHttpService } from './reimbursement-http/reimbursement-http.service';
import { ReimbursementPendingComponent } from './reimbursement-http/manager/reimbursement-pending/reimbursement-pending.component';
import { ReimbursementResolvedComponent } from './reimbursement-http/manager/reimbursement-resolved/reimbursement-resolved.component';
import { ReimbursementSubmitComponent } from './reimbursement-http/employee/reimbursement-submit/reimbursement-submit.component';
import { ReimbursementResolvedEmpComponent } from './reimbursement-http/employee/reimbursement-resolved-emp/reimbursement-resolved-emp.component';
import { ReimbursementEmployeeComponent } from './reimbursement-http/manager/reimbursement-employee/reimbursement-employee.component';
import { ManagerComponent } from './users/manager/manager.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { ReimbursementEditComponent } from './reimbursement-http/employee/reimbursement-edit/reimbursement-edit.component';
import { User } from './users/user.model';
import { UserService } from './users/user.service';
import { Image } from './image/image.model';
import { ImageService } from './image/image.service';



const routes: Routes = [  
  { path:'', component: LoginComponent},
  { path:'hello-manager', component: HelloManagerComponent, canActivate: [AdminGuard]},
  { path:'hello-employee', component: HelloEmployeeComponent, canActivate: [AdminGuard]},
  { path:'login', component: LoginComponent },
  { path:'logout', component: LogoutComponent },
  { path: 'reimbursement-http-service', component: ReimbursementHttpService, canActivate: [AdminGuard]},
  { path:'reimbursement-pending', component: ReimbursementPendingComponent, canActivate: [AdminGuard]},
  { path:'reimbursement-resolved', component: ReimbursementResolvedComponent, canActivate: [AdminGuard]},
  { path:'reimbursement-submit', component: ReimbursementSubmitComponent, canActivate: [AdminGuard]},
  { path:'reimbursement-resolved-emp', component: ReimbursementResolvedEmpComponent, canActivate: [AdminGuard]},
  { path:'reimbursement-employee', component: ReimbursementEmployeeComponent, canActivate: [AdminGuard]},
  { path:'manager', component: ManagerComponent, canActivate: [AdminGuard]},
  { path:'user-edit', component: UserEditComponent, canActivate: [AdminGuard]},
  { path:'reimbursement-edit', component: ReimbursementEditComponent, canActivate: [AdminGuard]},
  { path:'user-service', component: UserService, canActivate: [AdminGuard]},
  { path:'user', component: User, canActivate: [AdminGuard]},
  { path: 'reimbursement-edit/:sentReimbursementsID', component: ReimbursementEditComponent, canActivate: [AdminGuard]},
  { path: 'image', component: Image, canActivate: [AdminGuard]},
  { path: 'image-service', component: ImageService, canActivate: [AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }