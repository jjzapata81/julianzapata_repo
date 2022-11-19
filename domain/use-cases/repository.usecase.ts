import Tribe from '../../infrastructure/db/entities/tribe.model';
import RepositoryDto from '../models/repository.dto';
import { getStates } from '../../infrastructure/clients/http.client';
import { toRepositoryDto, toVerificationCode } from '../models/mappers/mappers';
import { VerificationCode } from '../models/verification.code.model';
import { findEnabledTribeById, findTribeById } from './tribe.usecase';


export const getById = async(id:string): Promise<RepositoryDto[]|undefined> => {
    const resp = await findTribeById(id);
    if(resp){
        return toRepositoryResponse(resp);
    }
    return;
}

export const getEnabledById = async(id:string): Promise<RepositoryDto[]|undefined> => {
    const resp = await findEnabledTribeById(id);
    if(resp){
        return (await toRepositoryResponse(resp))?.filter(repo=> validateCoverage(repo.coverage, 0.75));
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

const validateCoverage = (current:string, desired:number):boolean => {
    let toNumber = Number(current.replace("%", ''));
    return (toNumber/100)>=desired;
}