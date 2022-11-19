import { DataTypes, Model, Optional } from 'sequelize';
import { db } from '../database.config';

interface RepositoryAttr {
    id: number;
    idTribe: number;
    name: string;
    state: string;
    status: string;
    createTime: Date;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface RepositoryInput extends Optional<RepositoryAttr, 'id'> { }
export interface RepositoryOuput extends Required<RepositoryAttr> { }

class Repository extends Model<RepositoryAttr, RepositoryInput> implements RepositoryAttr {
    id!: number;
    idTribe!: number;
    name!: string;
    state!: string;
    status!: string;
    createTime!: Date;
    readonly createdAt!: Date;
    readonly updatedAt!: Date;
    readonly deletedAt!: Date;
}

Repository.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field:'id_repository'
    },
    idTribe:{
        type:DataTypes.INTEGER,
        field:'id_tribe'
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createTime:{
        type:DataTypes.TIME,
        field:'create_time'
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
    modelName:'repositories'
})

export default Repository;