import { DataTypes, Model, Sequelize } from "sequelize";

export class Project extends Model {
    public projectId: number | undefined;
    public projectName!: string;
    public projectCode!: string;

    public static initialize(sequelize: Sequelize) {
        return this.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            projectName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            projectCode: {
                type: DataTypes.STRING,
                allowNull: true
            }
        }, {
            sequelize,
            modelName: 'Projects',
            timestamps: false
        })
    }

    public static associate() {

    }

}