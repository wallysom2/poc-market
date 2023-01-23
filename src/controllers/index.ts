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

    async update (req: Request, res: Response) {
        const { id } = req.params;
        const { name, price } = req.body;
        const product = await ProductService.updateProduct(id, name, price);
        return res.json(product);
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        await ProductService.deleteProduct(id);
        return res.json({ message: 'Produto deletado com sucesso' });
    }
}