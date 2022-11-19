import { Router } from 'express';
import { getMetrics } from '../controllers/metrics.controller';
import { getOrganizations, postOrganization, putOrganization, deleteOrganization } from '../controllers/organization.controller';
import { getRepositories } from '../controllers/repository.controller';
import { getTribes } from '../controllers/tribe.controller';
import { pathConstants } from '../models/constants';
import { check } from 'express-validator';
import { fieldValidator } from '../helpers/field-validator';
//const {roleValidator} = require('../helpers/db-validators');

const router = Router();

router.get(pathConstants.ROOT, getRepositories);
router.get(pathConstants.ORGANIZATION, getOrganizations);
router.post(pathConstants.ORGANIZATION_BY_ID, postOrganization);
router.put(pathConstants.ORGANIZATION,[
    check('name', 'The organization name is required').not().isEmpty(),
    check('name', 'The name is too long, max 50 characters length').isLength({max:50}),
    check('status', 'The organization status is required').not().isEmpty(),
    fieldValidator
] ,putOrganization);
router.delete(pathConstants.ORGANIZATION_BY_ID, deleteOrganization);
router.get(pathConstants.METRICS, getMetrics);
router.get(pathConstants.TRIBE_BY_ID, getTribes);
/*router.put('/', putUser)
router.post('/',[
    check('userName', 'User name is required').not().isEmpty(),
    check('password', 'User password is required').not().isEmpty(),
    check('password', 'The password is too short, min six characters length').isLength({min:6}),
    check('email', 'Is not valid email').isEmail(),
    //check('rol').custom(roleValidator),
    fieldValidator
], postUser)
router.delete('/', deleteUser)*/

export default router;
