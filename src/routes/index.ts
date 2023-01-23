import { Router } from 'express';
import { ProductController } from '../controllers/';

const router = Router();
const productController = new ProductController();

router.get('/products', productController.index);
router.post('/products', productController.store);

export default router;