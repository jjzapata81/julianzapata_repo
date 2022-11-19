import { DataTypes, Model, Optional } from 'sequelize';
import { db } from '../database.config';

interface OriganizationAttr {
    id: number;
    name: string;
    status: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface OriganizationInput extends Optional<OriganizationAttr, 'id'> { }
export interface OriganizationOuput extends Required<OriganizationAttr> { }

class Organization extends Model<OriganizationAttr, OriganizationInput> implements OriganizationAttr {
    id!: number;
    name!: string;
    status!: number;
    readonly createdAt!: Date;
    readonly updatedAt!: Date;
    readonly deletedAt!: Date;
}

Organization.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'id_organization'
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.TIME,
        field: 'createdat'
    },
    updatedAt: {
        type: DataTypes.TIME,
        field: 'updatedat'
    },
    deletedAt: {
        type: DataTypes.TIME,
        field: 'deletedat'
    }
}, {
    timestamps: true,
    sequelize: db,
    paranoid: true,
    modelName:'organizations'
})

export default Organization;