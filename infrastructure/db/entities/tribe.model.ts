import { DataTypes, Model, Optional } from 'sequelize';
import { db } from '../database.config';
import Organization from './organization.model';
import Repository from './repository.model';

interface TribeAttr {
    id: number;
    idOrganization: number;
    name: string;
    status: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface TribeInput extends Optional<TribeAttr, 'id'> { }
export interface TribeOuput extends Required<TribeAttr> { }

class Tribe extends Model<TribeAttr, TribeInput> implements TribeAttr {
    id!: number;
    idOrganization!: number;
    name!: string;
    status!: number;
    organization!: Organization;
    repositories!: Repository[];
    readonly createdAt!: Date;
    readonly updatedAt!: Date;
    readonly deletedAt!: Date;
}

Tribe.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field:'id_tribe'
    },
    idOrganization: {
        type: DataTypes.INTEGER,
        field:'id_organization'
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
    modelName:'tribes'
})

export default Tribe;