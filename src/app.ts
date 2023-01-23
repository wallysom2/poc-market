import express from 'express';
import { createConnection } from 'typeorm';
import { StockController, StockService, StockRepository } from './controllers';
import { validateStock } from './middlewares';
import { router } from './routes';

const app = express();

createConnection().then(async connection => {

    app.use(express.json());
    app.use(router);
    app.listen(3000, () => {
        console.log('Server started on port 3000!');
    });
});
