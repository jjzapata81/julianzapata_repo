import axios from 'axios';
import { RepoVerification } from '../models/verification.code.model';

export const getStates = async():Promise<RepoVerification> => {
    const response = await axios.get(process.env.URL_MOCK||'');
    return response.data;
}
