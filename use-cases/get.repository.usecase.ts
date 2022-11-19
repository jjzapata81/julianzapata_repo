import Tribe from '../entities/tribe.model';
import RepositoryDto from '../models/repository.dto';
import { getStates } from '../clients/http.client';
import { toRepositoryDto, toVerificationCode } from '../models/mappers/mappers';
import { VerificationCode } from '../models/verification.code.model';
import { TribeService } from '../services/tribe.services';

const service = new TribeService();

export const getById = async(id:string): Promise<RepositoryDto[]|undefined> => {
    const resp = await service.findById(id);
    if(resp){
        return toRepositoryResponse(resp);
    }
    return;
}

export const getEnabledById = async(id:string): Promise<RepositoryDto[]|undefined> => {
    const resp = await service.findEnabled(id);
    if(resp){
        return (await toRepositoryResponse(resp))?.filter(repo=>repo.coverage);
    }
    return;
}

const toRepositoryResponse = async (tribe:Tribe): Promise<RepositoryDto[]|undefined> => {
    const verificationCodes: VerificationCode[] = await getStates();
    return tribe.repositories
        .map(toRepositoryDto)
        .map(item=>{
            item.tribe=tribe.name;
            item.organization = tribe.organization.name;
            item.verificationState = toVerificationCode(item.id, verificationCodes)
            return item;
        });
}