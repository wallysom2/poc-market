import { getConnection, Connection } from 'typeorm';

class StockRepository {
  private connection: Connection;

  constructor() {
    this.connection = getConnection();
  }

  async getStock() {
    const stock = await this.connection.query('SELECT * FROM stock');
    return stock;
  }

  async updateStock(productId: number, quantity: number) {
    await this.connection.query(
      'UPDATE stock SET quantity = quantity + $1 WHERE product_id = $2',
      [quantity, productId]
    );
    const updatedStock = await this.connection.query(
      'SELECT * FROM stock WHERE product_id = $1',
      [productId]
    );
    return updatedStock;
  }
}

export default StockRepository;
