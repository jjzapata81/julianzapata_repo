import  { Request, Response } from 'express';
import { getById, getEnabledById } from '../use-cases/get.repository.usecase';

export const getRepositories = async (req: Request, res: Response)=>{
    const { id } = req.params;
    const response = await getById(id);
    if(response){
        res.json(response);
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