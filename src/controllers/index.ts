import { Request, Response } from 'express';
import { ProductService } from '../service';

export class ProductController {
    async index(req: Request, res: Response) {
        const products = await ProductService.getAllProducts();
        return res.json(products);
    }

    async store(req: Request, res: Response) {
        const { name, price } = req.body;
        const product = await ProductService.createProduct(name, price);
        return res.json(product);
    }
}