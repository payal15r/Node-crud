
import { Request,Response } from "express";
import * as DepartmentService from "../service/Department.service";

export async function SaveDepartment(req:Request,res:Response) {
    try{
        if(!req.body.DepartmentName){
            return res.send("Please enter Department name !")
        }
        const data=await DepartmentService.SaveDepartment(req.body);
        res.status(200).json({
                    message:"Department saved successfully",
                    data:data
                })
        // if(data==-1){
        //     return res.status(404).json({
        //         message:"Department alredy exist",
        //     })
        // }
        // else if(data){
        //     res.status(200).json({
        //         message:"Department saved successfully",
        //         data:data
        //     })
        // }
        // else{
        //     return res.status(404).json({
        //         message:'Error while saving Department',
        //     })
        // }

    }   
    catch(err) {
        return res.send(err || 'somthing went wrong!')
    }
}