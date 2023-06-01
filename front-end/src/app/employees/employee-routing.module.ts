import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';




const routes: Routes = [
  {
    path: '',
    component: EmployeeListComponent,
    // canActivate: [NgxPermissionsGuard],
    // data: {
    //   permissions: {
    //     only: [
    //       'Admin',
    //     ],
    //     redirectTo: '/login'
    //   }
    // }  
  },
  {
    path: ':id',
    component: EditEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
