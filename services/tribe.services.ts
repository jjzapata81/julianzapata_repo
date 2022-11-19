import { where } from 'sequelize';
import { Tribe, Repository, Organization } from '../entities/indexDB';

export class TribeService {
    constructor(){
    }

    async findById(id:any){
        const response = await Tribe.findByPk(id, {
            include:
                [Organization,Repository]
            
        });
        return response;
    }
}
