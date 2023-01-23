import { connection } from './../config/db'

export function getProductById(id: string) {

    return connection.query(
        `
        SELECT * FROM tasks
        WHERE id=$1
        ;`
        , [id]
    )
}