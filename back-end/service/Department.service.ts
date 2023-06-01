import { Op, where } from "sequelize";
import { Department } from "../models/department";


export async function SaveDepartment(body:any) {
    let Departmentbody=body;
    // if(Department){
    //     let empcount=await Department.findAndCountAll({
    //     where: {
    //         name: {
    //         [Op.like]: Department.DepartmentName
    //         }
    //     }
    // });
    // if(empcount.count==0 || empcount.count){
    //     return Department.create(body);
    // }
    // else{
    //     return -1;
    // }
    // }
    return Department.create(body);
}

// export async function UpdateDepartment(empId:number,body:any) {
//     return Department.update(body,{
//         where:{
//             id:empId
//         }
//     })
// }

// export async function GetDepartments() {
//     return Department.findAll();
// }

// export async function DeleteDepartment(empId:number) {
//     return Department.destroy({
//         where:{
//             id:empId
//         }
//     })
// }

