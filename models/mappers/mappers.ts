import Repository from "../../entities/repository.model"
import Tribe from "../../entities/tribe.model"
import RepositoryDto from "../repository.dto"

export const StateMapper = {
    E:"Habilitado",
    D:"Deshabilitado",
    A:"Archivado"
}

export const VerificationCodeMapper = {
    '604':"Verificado",
    '605':"En espera",
    '606':"Aprobado"
}

export const toRepositoryDto = (source:Repository): RepositoryDto => {
    return {
        id:source.id,
        name:source.name,
        tribe:'',
        organization:'',
        coverage:`${source.metric.coverage*100}%`,
        codeSmells:source.metric.codeSmells,
        bugs:source.metric.bugs,
        vulnerabilities:source.metric.vulnerabilities,
        hotspots:source.metric.hotspot,
        verificationState: '',
        state:StateMapper[source.state]
    }
}

export const toVerificationCode = (id:number, verificationCodes:VerificationCode[]):string =>{
    const verificationCode = verificationCodes.filter(item => item.id === Number(id))[0];
    if(verificationCode){
        return VerificationCodeMapper[verificationCode.state];
    }
    return 'N/A';
}

