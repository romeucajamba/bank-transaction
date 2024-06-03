import { FastifyInstance } from "fastify";
import { connection} from '../../database/db';
import { z } from 'zod';
import { checkSessionExistent } from '../../middleware/check_session_existents';

export async function getTransactionById(server:FastifyInstance){
    server.get('/transactions/:id', {
        preHandler: [checkSessionExistent] //Vai validar o cookie antes de executar o código abaixo
    }, async (request) => {

        const { sessionId } = request.cookies


        const getTransactionParamsSchema = z.object({
            id: z.string().uuid(),
        })

        const { id } = getTransactionParamsSchema.parse( request.params)

        const transactionsId = await connection.trasactions.findUnique({
            where:{
                id,
                sessionId
            }
        })

        return { transactionsId }
    })
}