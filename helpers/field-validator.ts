import { validationResult } from 'express-validator';

export const fieldValidator = (req:Request, res:any, next:any)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors);
    }
    next();
}
