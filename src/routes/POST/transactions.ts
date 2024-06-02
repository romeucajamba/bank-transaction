import { FastifyInstance } from 'fastify';
import { connection } from '../../database/db';
import { randomUUID } from 'crypto';
import { z } from 'zod';


export async function transactionsRoute(server: FastifyInstance) {

    server.post('/', async (request, reply) => {

        const createTransactionBodySchema = z.object({
            title: z.string(),
            amount: z.number(),
            type: z.enum(['credit', 'debit'])
        })

        const { title, amount, type } = createTransactionBodySchema.parse(
            request.body
        ) 
    
        const registerTransaction = await connection.trasactions.create({
            data:{
                id: randomUUID(),
                title,
                amount: type == 'credit' ? amount : amount * -1,
            }
        })
        return reply.status(201).send()
    })
}