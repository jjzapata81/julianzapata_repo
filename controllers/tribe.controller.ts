import  { Request, Response } from 'express';
import { TribeService } from '../services/tribe.services';
import { getById } from '../use-cases/get.repository.usecase';

const tribeService = new TribeService();

export const getTribes = async (req: Request, res: Response)=>{
    const { id } = req.params;
    //const response = await tribeService.findById(id);
    const response = await getById(id);
    if(response){
        res.json(response);
    }else{
        res.status(404).json({
            'message':'La Tribu no se encuentra registrada'
        });
    }
}
