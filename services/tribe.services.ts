
import { Op, Sequelize } from 'sequelize';
import { Tribe, Repository, Organization, Metric } from '../entities/indexDB';

export class TribeService {
    constructor() {
    }

    findById = async (id: string): Promise<Tribe | null> => {
        return find(id);
    }

    findEnabled = async (id: string): Promise<Tribe | null> => {
        const options = {
            "state": "E",
            [Op.and]: Sequelize.where(Sequelize.fn("date_part", 'YEAR', Sequelize.col('create_time')), new Date().getFullYear())
        }
        return find(id, options);
    }
}

const find = async (id: string, options?: any): Promise<Tribe | null> => {
    const response = await Tribe.findByPk(id, {
        include:
            [
                {
                    model: Organization,
                    attributes: ["name"],
                },
                {
                    model: Repository,
                    attributes: ["id", "name", "state", "status", "createTime"],
                    where: options,
                    include: [
                        {
                            model: Metric,
                            attributes: ["coverage", "bugs", "vulnerabilities", "hotspot", "codeSmells"]
                        }
                    ]
                }
            ]

    });
    return response;
}
