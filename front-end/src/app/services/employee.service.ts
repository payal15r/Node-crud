import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

const baseUrl = 'http://localhost:4444/api/';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {
   
  }
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${baseUrl}employees`);}
}
