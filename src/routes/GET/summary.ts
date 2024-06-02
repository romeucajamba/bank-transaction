import { FastifyInstance } from "fastify";
import { connection} from '../../database/db';

export async function getSummary(server:FastifyInstance) {
    server.get('/summary', async () => {

        const summary = await connection.trasactions.aggregate({
            _sum:{
                amount:true
            }
        })

        return { summary }
    })   
}