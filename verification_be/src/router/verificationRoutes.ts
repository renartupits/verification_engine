import {Router} from 'express'
import verificationController from '../controller/verificationController'
import {checksSchema} from '../controller/schemas/checksSchema'
import {Validator} from 'express-json-validator-middleware';

const router = Router()
const { validate } = new Validator({});

router.get('/', verificationController.getCheckItems);
router.post('/submit', validate({body: checksSchema}), verificationController.submitCheckItems);

export default router;
