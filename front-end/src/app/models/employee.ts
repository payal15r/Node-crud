import { EmployeeParams } from "../interface/employees";


export class Employee {
    public id!: number;
    public name!: string;
    public city!: string;
    public country!: string;
    constructor(params: EmployeeParams  = {}) {
        Object.assign(this, params);
      }
}