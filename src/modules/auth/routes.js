import { Router } from 'express';
import { auth } from './controller';

const router = Router();

router.route('/auth').post(auth);

export default router;
