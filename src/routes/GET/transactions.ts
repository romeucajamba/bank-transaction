import { FastifyInstance } from "fastify";
import { connection} from '../../database/db';

export async function getTransaction(server:FastifyInstance){
    server.get('/', async () => {
        const transactions = await connection.trasactions.findMany()

        return {transactions}
    })
}