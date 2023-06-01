import { DataTypes, Model, Sequelize } from "sequelize";


export class ProjectMapping extends Model{
    public projectMapId:number|undefined;
    public employeeId!:number;
    public projectId!: number;

    public static initialize(sequelize:Sequelize){
            return this.init({
                employeeId:{
                    type:DataTypes.NUMBER,
                    allowNull:true,
                    references:{
                        model:'Employees',
                        key:'id'
                    }
                },
                projectId:{
                    type:DataTypes.NUMBER,
                    allowNull:true,
                    references:{
                        model:'Projects',
                        key:'id'
                    }
                }
            },{
                sequelize,
                tableName:'ProjectMappings',
                timestamps: false   
            })
    }

    public static associate(){
    
    }
}