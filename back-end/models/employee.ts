import { DataTypes, Model, Sequelize } from "sequelize";
import { Department } from "./department";
import { Project } from "./project";
import { ProjectMapping } from "./projectMapping";

export class Employee extends Model {
    public id!: number;
    public name!: string;
    public city!: string;
    public company!: string;

public readonly project!:Project[];
    public static initialize(sequelize: Sequelize) {
        return this.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            city: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            company: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            departmentId: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'Departments',
                    key: 'departmentId'
                },
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'Employees',
            timestamps: false,
        });
    }

    public static associate() {

        //belongsTo
        this.belongsTo(Department, { as: 'department', foreignKey: 'departmentId', hooks: true });
        this.beforeCreate(() => {
            console.log("Employee data is ready to serve")
        });

        this.afterCreate(() => {
            console.log("Employee created successfully")
        })

        //BelongsToMany
        // Employee.belongsToMany(Project, { as: 'project', through: 'ProjectMappings',foreignKey:'projectId' });
        
        // Project.belongsToMany(Employee, { as: 'employee', through: 'ProjectMappings',foreignKey:'id' });

        this.belongsToMany(Project, {
            as: 'project',
            through: 'ProjectMappings',
            foreignKey: 'employeeId',
            otherKey:'projectId'
        })

         // Project.belongsToMany(Employee, { as: 'employee', through: 'ProjectMappings',foreignKey:'id' });
// Define the BelongsToMany association

    }
}