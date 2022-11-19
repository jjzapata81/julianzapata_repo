import  { Request, Response } from 'express';
import { getById, getEnabledById } from '../../../domain/use-cases/repository.usecase';
import { csvHelper } from '../../helpers/csv.helper';

export const getRepositories = async (req: Request, res: Response)=>{
    const { id } = req.params;
    const response: any = await getById(id);
    const csv = csvHelper(response);
    if(response){
        res.attachment('filename.csv').send(csv);
    }else{
        res.status(404).json({
            'message':'La Tribu no se encuentra registrada'
        });
    }
}

export const getEnabledRepositories = async (req: Request, res: Response)=>{
    const { id } = req.params;
    const response = await getEnabledById(id);
    if(response){
        res.json(response);
    }else{
        res.status(404).json({
            'message':'La Tribu no se encuentra registrada'
        });
    }
}