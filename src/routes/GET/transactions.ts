import { FastifyInstance } from "fastify";
import { connection} from '../../database/db';
import { checkSessionExistent } from '../../middleware/check_session_existents';

export async function getTransaction(server:FastifyInstance){
    server.get('/transactions',{

        preHandler: [checkSessionExistent],

    }, async (request) => {

        const sessionId = request.cookies


        const transactions = await connection.trasactions.findMany()

        return {transactions}
    })
}