import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './users/login/login.component';  
import { HeaderComponent } from './header/header.component';
import { ReimbursementPendingComponent } from './reimbursement-http/manager/reimbursement-pending/reimbursement-pending.component';
import { ReimbursementResolvedComponent } from './reimbursement-http/manager/reimbursement-resolved/reimbursement-resolved.component';
import { ReimbursementResolvedEmpComponent } from './reimbursement-http/employee/reimbursement-resolved-emp/reimbursement-resolved-emp.component';
import { ReimbursementSubmitComponent } from './reimbursement-http/employee/reimbursement-submit/reimbursement-submit.component';
import { ManagerComponent } from './users/manager/manager.component';
import { HelloManagerComponent } from './hello/hello-manager/hello-manager.component';
import { HelloEmployeeComponent } from './hello/hello-employee/hello-employee.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { ReimbursementEmployeeComponent } from './reimbursement-http/manager/reimbursement-employee/reimbursement-employee.component';
import { ReimbursementEditComponent } from './reimbursement-http/employee/reimbursement-edit/reimbursement-edit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ReimbursementPendingComponent,
    ReimbursementResolvedComponent,
    ReimbursementResolvedEmpComponent,
    ReimbursementSubmitComponent,
    ManagerComponent,
    HelloManagerComponent,
    HelloEmployeeComponent,
    UserEditComponent,
    ReimbursementEmployeeComponent,
    ReimbursementEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
