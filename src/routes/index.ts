import express from 'express';
import StockController from './stock.controller';
import { validateStock } from './stock.middleware';

const router = express.Router();
const stockController = new StockController(new StockService());

router.get('/stock', stockController.getStock);
router.post('/stock', validateStock, stockController.updateStock);

export default router;
