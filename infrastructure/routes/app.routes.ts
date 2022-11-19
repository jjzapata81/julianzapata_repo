import { Router } from 'express';
import { check } from 'express-validator';
import { getOrganizations, postOrganization, putOrganization, deleteOrganization } from '../entrypoints/controllers/organization.controller';
import { getRepositories, getEnabledRepositories } from '../entrypoints/controllers/repository.controller';
import { pathConstants } from '../../domain/models/constants';
import { fieldValidator } from './helpers/field-validator';

const router = Router();

router.get(pathConstants.REPOSITORIES_BY_ID, getRepositories);
router.get(pathConstants.REPOSITORIES_ENABLED_BY_ID, getEnabledRepositories);
router.get(pathConstants.ORGANIZATION, getOrganizations);
router.post(pathConstants.ORGANIZATION_BY_ID,[
    check('name', 'The organization name is required').not().isEmpty(),
    check('name', 'The name is too long, max 50 characters length').isLength({max:50}),
    check('status', 'The organization status is required').not().isEmpty(),
    fieldValidator
] ,postOrganization);
router.put(pathConstants.ORGANIZATION,[
    check('name', 'The organization name is required').not().isEmpty(),
    check('name', 'The name is too long, max 50 characters length').isLength({max:50}),
    check('status', 'The organization status is required').not().isEmpty(),
    fieldValidator
] ,putOrganization);
router.delete(pathConstants.ORGANIZATION_BY_ID, deleteOrganization);

export default router;
