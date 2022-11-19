import { DataTypes, Model, Optional } from 'sequelize';
import { db } from '../database.config';

interface MetricAttr {
    id: number;
    coverage:number;
    bugs: number;
    vulnerabilities: number;
    hotspot: number;
    codeSmells: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface MetricInput extends Optional<MetricAttr, 'id'> { }
export interface MetricOuput extends Required<MetricAttr> { }

class Metric extends Model<MetricAttr, MetricInput> implements MetricAttr {
    id!: number;
    coverage!: number;
    bugs!: number;
    vulnerabilities!: number;
    hotspot!: number;
    codeSmells!: number;
    readonly createdAt!: Date;
    readonly updatedAt!: Date;
    readonly deletedAt!: Date;
}

Metric.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field:'id_repository'
    },
    coverage: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    bugs: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    vulnerabilities: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    hotspot: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    codeSmells: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field:'code_smells'
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
    modelName:'metrics'
})

export default Metric;