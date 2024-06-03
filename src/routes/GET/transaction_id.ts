import { FastifyInstance } from "fastify";
import { connection} from '../../database/db';
import { z } from 'zod';

export async function getTransactionById(server:FastifyInstance){
    server.get('/transactions/:id', async (request) => {
        const getTransactionParamsSchema = z.object({
            id: z.string().uuid(),
        })

        const { id } = getTransactionParamsSchema.parse( request.params)

        const transactionsId = await connection.trasactions.findUnique({
            where:{
                id
            }
        })

        return { transactionsId }
    })
}