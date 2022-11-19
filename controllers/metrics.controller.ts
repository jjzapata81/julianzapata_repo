import { Request, Response} from 'express';
import {Tribe,Repository, Organization} from '../entities/indexDB';


export const getMetrics = async (req: Request, res: Response)=>{
    const response = await Tribe.findAll({
        include:
            [Organization,Repository]
        
    });
    res.json(response);
}
