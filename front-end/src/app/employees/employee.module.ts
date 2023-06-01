import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [],
  imports: [
    NgSelectModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EmployeeRoutingModule,
    NgxPermissionsModule,
  ]
})
export class EmployeeModule { }
