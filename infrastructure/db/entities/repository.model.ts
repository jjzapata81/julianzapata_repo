import { DataTypes, Model, Optional } from 'sequelize';
import StateEnum from '../../../domain/models/state.enum';
import { db } from '../database.config';
import Metric from './metrics.model';

interface RepositoryAttr {
    id: number;
    idTribe: number;
    name: string;
    state: StateEnum;
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
    state!: StateEnum;
    status!: string;
    createTime!: Date;
    metric!:Metric;
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
        type: DataTypes.ENUM(StateEnum.A, StateEnum.D, StateEnum.E),
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM("A", "I"),
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