import Repository from "../../entities/repository.model"
import RepositoryDto from "../repository.dto"
import { VerificationCode } from "../verification.code.model"

let stateMap: Map<string, string> = new Map();
stateMap.set("E", "Habilitado");
stateMap.set("D", "Deshabilitado");
stateMap.set("A", "Archivado");

let verificationCodeMap: Map<number, string> = new Map();
verificationCodeMap.set(604,"Verificado");
verificationCodeMap.set(605,"En espera");
verificationCodeMap.set(606,"Aprobado");

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
        state:stateMap.get(source.state)||''
    }
}

export const toVerificationCode = (id:number, verificationCodes:VerificationCode[]):string =>{
    const verificationCode = verificationCodes.filter(item => item.id === Number(id))[0];
    if(verificationCode){
        return verificationCodeMap.get(verificationCode.state)||'N/A';
    }
    return 'N/A';
}

