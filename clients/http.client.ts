import axios from 'axios';

export const getStates = async()=>{
    const response = await axios.get(process.env.URL_MOCK||'');
    return response.data;
}
