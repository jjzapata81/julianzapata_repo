import { getStates } from '../clients/http.client';
import { StateMapper, VerificationCodeMapper } from '../models/mappers/mappers';
import RepositoryDto from '../models/repository.dto';
import { VerificationCode } from '../models/verification.code.model';
import { TribeService } from '../services/tribe.services';

const getById = async(id:string): Promise<RepositoryDto[]|undefined> => {
    const verificationCodes: VerificationCode[] = await (await getStates()).repositories;
    const service = new TribeService();
    const resp = await service.findById(id);
    if(resp){
        return resp.repositories.map(item=>{
            const repo: RepositoryDto = {
                id:item.id,
                name:item.name,
                tribe:resp.name,
                organization:resp.organization.name,
                coverage:`${item.metric.coverage*100}%`,
                codeSmells:item.metric.codeSmells,
                bugs:item.metric.bugs,
                vulnerabilities:item.metric.vulnerabilities,
                hotspots:item.metric.hotspot,
                verificationState: findCodeById(item.id, verificationCodes),
                state:StateMapper[item.state]
            }
            return repo;
        })
    }
    return;
}

const findCodeById = (id:number, verificationCodes:VerificationCode[]):string =>{
    const verificationCode = verificationCodes.filter(item => item.id === Number(id))[0];
    if(verificationCode){
        return VerificationCodeMapper[verificationCode.state];
    }
    return 'N/A';
}

export {
    getById
}