import { createConnection, Connection } from 'typeorm';

export const connection = createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'stock_control',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
});
