import {Router} from 'express'
import verificationController from '../controller/verificationController'

const router = Router()

router.get('/', verificationController.getCheckItems);
router.post('/', verificationController.submitCheckItems);

export default router;
