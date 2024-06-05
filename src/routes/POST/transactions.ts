import { FastifyInstance } from 'fastify';
import { connection } from '../../database/db';
import { randomUUID } from 'crypto';
import { z } from 'zod';


export async function transactionsRoute(server: FastifyInstance) {

    server.post('/transactions', async (request, reply) => {

        const createTransactionBodySchema = z.object({
            title: z.string(),
            amount: z.number(),
            type: z.enum(['credit', 'debit'])
        })

        const { title, amount, type } = createTransactionBodySchema.parse(
            request.body
        ) 
        
        let sessionId = request.cookies.sessionId

        if(!sessionId){
            sessionId = randomUUID()

            reply.cookie('sessionId', sessionId,{
                path: '/transactions',
                maxAge: 100 * 60 * 60 * 24 * 7 //Guardará os cookies durante 7 dias
            })
        }

        const registerTransaction = await connection.trasactions.create({
            data:{
                id: randomUUID(),
                title,
                /**Se a transação for credito, vai manter o valor(amount) do jeito que está, se for debito, vai multiplicar por -1 */
                amount: type == 'credit' ? amount : amount * -1,
                //Aqui estava o sessionId do cookie 
            }
        })
        return reply.status(201).send()
    })
}