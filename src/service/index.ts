import { connection } from './../config/db'
import { getProductById } from './../repositories'

export class ProductService {
    static async getAllProducts() {
        const { rows } = await connection.query('SELECT * FROM products');
        return rows;
    }

    static async createProduct(name: string, price: string) {
        const { rows } = await connection.query('INSERT INTO products(name, price) VALUES($1, $2) RETURNING *', [name, price]);
        return rows[0];
    }

    static async updateProduct(id: string, name: string, price: string) {
        const { rows } = await connection.query('UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING *', [name, price, id]);
        return rows[0];
    }

    static async deleteProduct(id: string) {
        await connection.query('DELETE FROM products WHERE id = $1', [id]);
    }

}