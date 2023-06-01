import { Request, Response } from "express"
import * as employeeService from "../service/Employee.service";
export async function SaveEmployee(req: Request, res: Response) {
    try {
        if (!req.body.name) {
            return res.send("Please enter employee name !")
        }
        else if (!req.body.city) {
            return res.send("Please enter city name !")
        }
        const data = await employeeService.SaveEmployee(req.body);
        if (data == -1) {
            return res.status(404).json({
                message: "Employee alredy exist",
            })
        }
        else if (data) {
            res.status(200).json({
                message: "Employee saved successfully",
                data: data
            })
        }
        else {
            return res.status(404).json({
                message: 'Error while saving employee',
            })
        }

    }
    catch (err) {
        return res.send(err || 'somthing went wrong!')
    }
}

export async function UpdateEmployee(req: Request, res: Response) {
    try {
        if (!req.body.name) {
            return res.send("Please enter employee name !")
        }
        else if (!req.body.city) {
            return res.send("Please enter city name !")
        }

        const data = await employeeService.UpdateEmployee(+req.params.id, req.body);
        res.status(200).json({
            message: "Employee updated successfully",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}
export async function GetEmployees(req: Request, res: Response) {
    try {
        const data = await employeeService.GetEmployees();
        if (data) {
            res.status(200).json({
                data
            })
        }
        else {
            res.status(401).json({
                message: "Employee not found !"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

export async function GetEmployeeWithProject(req:Request,res:Response) {
    try{
        const data=await employeeService.GetEmployeeWithProject();
        if (data) {
            res.status(200).json({
                data
            })
        }
        else {
            res.status(401).json({
                message: "Employee not found !"
            })
        }
    }
    catch(error){

    }
}

export async function DeleteEmployee(req: Request, res: Response) {
    try {
        const data = await employeeService.DeleteEmployee(+req.params.id)
        if (data) {
            res.status(200).json({
                data
            })
        }

    }
    catch (err) {
        res.status(500).json({
            message: err
        })
    }
}