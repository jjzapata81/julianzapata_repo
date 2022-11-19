import axios from 'axios';
import { RepoVerification, VerificationCode } from '../models/verification.code.model';

export const getStates = async():Promise<VerificationCode[]> => {
    return axios.get(process.env.URL_MOCK||'').then(response=>{
        const resp:RepoVerification = response.data;
        return resp.repositories;
    });
}
