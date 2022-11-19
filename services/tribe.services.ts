import { where } from 'sequelize';
import { Tribe, Repository, Organization, Metric } from '../entities/indexDB';

export class TribeService {
    constructor(){
    }

    async findById(id:any){
        const response = await Tribe.findByPk(id, {
            include:
                [
                    {
                        model:Organization,
                        attributes:["name"]
                    },
                    {
                        model: Repository,
                        attributes:["id","name", "state", "status", "createTime"],
                        include:[
                            {
                                model:Metric,
                                attributes:["coverage", "bugs", "vulnerabilities", "hotspot", "codeSmells"],
                            }
                        ]
                    }
                ]
            
        });
        return response;
    }
}
