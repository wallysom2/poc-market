import pg from "pg"

const { Pool } = pg

export const connection = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'stockDB',
    password: 'm',
    port: 5432,
})

