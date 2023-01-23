import express from 'express';
import routes from './routes';
import { connection } from './config/db'

connection.connect()
    .then(() => {
        const app = express();

        app.use(express.json());
        app.use(routes);

        app.listen(3000, () => {
            console.log('Server started on port 3000!');
        });
    })
    .catch(error => console.log(error));