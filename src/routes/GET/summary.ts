import { FastifyInstance } from "fastify";
import { connection} from '../../database/db';
import { checkSessionExistent } from '../../middleware/check_session_existents';

export async function getSummary(server:FastifyInstance) {
    server.get('/transactions/summary',{

        preHandler: [checkSessionExistent],

    }, async (request) => {

        const sessionId = request.cookies

        const summary = await connection.trasactions.aggregate({
            _sum:{
                amount:true
            }
        })

        return { summary }
    })   
}