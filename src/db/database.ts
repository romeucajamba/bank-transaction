import { Client, Knex as setupKnex } from "knex";


export const knex = setupKnex({
    Client: 'sqlite',
    connection: {
        filename: '../database/mydb.sqlite',
    },
})