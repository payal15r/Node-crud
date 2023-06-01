import { Router } from 'express';
import * as userController from '../controller/User.controller';
import * as employeeController from '../controller/Employee.controller';
import * as departmentContoller from '../controller/Department.controller';

export default function () {
    const router = Router();
    console.log('router called..');

    router.get('/api/users', userController.getUsers);
    router.post('/api/login', userController.login);
    router.post('/api/user', userController.Registration);
    

    // router.get('/api/tutorials', userController.getTutorials)
    // router.post('/api/tutorials', userController.createTutorial)
    router.get('/api/user/:id', userController.getUserById)
    router.delete('/api/user/:id', userController.deleteUser)
    router.put('/api/user/:id', userController.updateUser)
    

    // router.delete('/api/tutorials', userController.deleteTutorials)

    router.post('/api/employees',employeeController.SaveEmployee);
    router.put('/api/employee/:id',employeeController.UpdateEmployee);
    router.get('/api/employees',employeeController.GetEmployees);
    router.delete('/api/employee/:id',employeeController.DeleteEmployee);

    router.get('/api/employee/employee-projects',employeeController.GetEmployeeWithProject)

    router.post('/api/departments',departmentContoller.SaveDepartment);

    console.log('router called finished..');
    return router;
}