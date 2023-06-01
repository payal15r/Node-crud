import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { AuthService } from './utils/guards/auth.service';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersListComponent,
    EmployeeListComponent,
    EditEmployeeComponent,
    AddEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
