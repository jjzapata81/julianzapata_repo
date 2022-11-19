import { Request, Response } from 'express';

import { getStates } from '../clients/http.client';

export const getRepositories = async (req: Request, res: Response)=>{
    const response = await getStates();
    res.json(response);
}
