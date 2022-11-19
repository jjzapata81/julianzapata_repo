import Repository from './repository.model';
import Metric from './metrics.model';
import Tribe from './tribe.model';
import Organization from './organization.model';


Organization.hasMany(Tribe, {foreignKey:'id_organization'});
Tribe.belongsTo(Organization, {foreignKey:'id_organization'});

Tribe.hasMany(Repository, {foreignKey:'id_tribe'});
Repository.belongsTo(Tribe, {foreignKey:'id_tribe'});

Metric.belongsTo(Repository, {foreignKey:'id_repository'});
Repository.belongsTo(Metric, {foreignKey:'id_repository'});



export {
    Repository,
    Metric,
    Tribe,
    Organization
}