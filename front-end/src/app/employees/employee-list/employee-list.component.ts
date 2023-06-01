import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  private _unsubscribe = new Subject<void>();
  Employees!: Employee[];
  search = '';
  constructor(
    private _userService: EmployeeService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  ngOnDestroy(): void {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

  getEmployees() {
    this._userService.getEmployees()
      .pipe(takeUntil(this._unsubscribe))
      .subscribe({
        next: (res) => {
          this.Employees = res['data'];
        },
        error: (e) => console.error(e)
      });
  }
  onEdit(id: number) {
    this._router.navigate(['/user', id]);
  }
  onDelete(id: number) {
    let output;
    Swal.fire({
      title: 'Are you sure want to remove?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'success'
        )
        output = true;
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'error'
        )
        output = false;
      }
      if (output) {
        // this._userService.delete(id).pipe(takeUntil(this._unsubscribe))
        //   .subscribe({
        //     next: (res) => {
        //       this.getEmployees();
        //     },
        //     error: (e) => console.error(e)
        //   });
      }
    })
  }
}
