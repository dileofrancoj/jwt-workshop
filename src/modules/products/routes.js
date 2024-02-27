import { Router } from 'express';
import { products } from './controller';

const router = Router();

router.route('/products').get(products);

export default router;
