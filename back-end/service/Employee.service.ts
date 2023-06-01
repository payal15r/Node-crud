import { Op, where } from "sequelize";
import { Employee } from "../models/employee";
import { Department } from "../models/department";
import { Project } from "../models/project";

export async function SaveEmployee(body:any) {
    let employee=body;
    if(employee){
        let empcount=await Employee.findAndCountAll({
        where: {
            name: {
            [Op.like]: employee.name
            }
        }
    });
    if(empcount.count==0){
        return Employee.create(body);
    }
    else{
        return -1;
    }
    }
}

export async function UpdateEmployee(empId:number,body:any) {
    return Employee.update(body,{
        where:{
            id:empId
        }
    })
}

export async function GetEmployees() {
    return Employee.findAll(
        {include:
            [{
                model: Department,
                as: 'department',
               
            }]}
    );
}

export async function GetEmployeeWithProject() {
    try{
       const data=await Employee.findAll({
            include: [{
                 model:Project,
                 as:'project'
            }],
            //to print query in console
            logging:true
         }) 
        //  .then((data) => {
        //     data.forEach((user) => {
        //       console.log(`User: ${user.name}`);
        //       console.log(`Projects: ${user.project.map((project) => project.projectName).join(', ')}`);
        //       console.log('---');
        //     });
        //   });
         return data;
    }
    catch(err){
            console.log(err);
    }
    
}

export async function DeleteEmployee(empId:number) {
    return Employee.destroy({
        where:{
            id:empId
        }
    })
}

