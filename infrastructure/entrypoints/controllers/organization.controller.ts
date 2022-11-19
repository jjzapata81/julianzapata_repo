import { Request, Response } from 'express';
import { findAll, update, create, deleteById } from '../../../domain/use-cases/organization.usecase';

export const getOrganizations = async (req: Request, res: Response) => {
    try {
        const organizations = await findAll();
        res.json(organizations);
    } catch (err) {
        console.log(err)
        res.status(500).json({
            'message': 'Ocurrió un error al consultar las Organizaciones'
        });
    }
}

export const postOrganization = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const organization = await update(id, body);
        if (organization) {
            res.json(organization);
        }else{
            res.status(404).json({
                'message': `No existe una organización con el id ${id}`
            });
        }
    } catch (err) {
        res.status(500).json({
            'message': 'Ocurrió un error al actualizar la Organización'
        });
    }
}

export const putOrganization = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const organization = await create(body);
        res.json(organization);
    } catch (err) {
        res.status(500).json({ 
            'message': 'Ocurrió un error al crear la Organizacion'
        });
    }
}

export const deleteOrganization = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const organization = await deleteById(id);
        if (organization) {
            res.json(organization);
        }else{
            res.status(404).json({
                'message': `No existe una organización con el id ${id}`
            });
        }
    } catch (err) {
        res.status(500).json({
            'message': 'Ocurrió un error al actualizar la Organización'
        });
    }
}
