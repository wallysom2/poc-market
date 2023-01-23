import { Request, Response } from 'express';
import { StockService } from './stock.service';

class StockController {
  private stockService: StockService;

  constructor(stockService: StockService) {
    this.stockService = stockService;
  }

  async getStock(req: Request, res: Response) {
    const stock = await this.stockService.getStock();
    res.send(stock);
  }

  async updateStock(req: Request, res: Response) {
    const { productId, quantity } = req.body;
    const updatedStock = await this.stockService.updateStock(productId, quantity);
    res.send(updatedStock);
  }
}

export default StockController;
