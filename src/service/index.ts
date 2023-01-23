import { connection } from './../config/db'

export class ProductService {
    static async getAllProducts() {
        const { rows } = await connection.query('SELECT * FROM products');
        return rows;
    }

    static async createProduct(name: string, price: number) {
        const { rows } = await connection.query('INSERT INTO products(name, price) VALUES($1, $2) RETURNING *', [name, price]);
        return rows[0];
    }
}