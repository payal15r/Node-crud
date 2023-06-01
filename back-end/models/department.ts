import { DataTypes, Model, Sequelize } from "sequelize";

export class Department extends Model{
    public departmentId:number | undefined;
    public departmentName:string | undefined;
    public departmentCode:string | undefined;

    public static initialize(sequelize: Sequelize){
        return this.init({
            departmentId:{
                type:DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            }, 
            departmentName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            departmentCode: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },{
            sequelize,
            tableName:"Departments",
            timestamps: false
        });
    }
}