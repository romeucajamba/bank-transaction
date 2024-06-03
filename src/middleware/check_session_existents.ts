import { FastifyReply, FastifyRequest } from "fastify";

export async function checkSessionExistent(request:FastifyRequest, reply: FastifyReply) {
    
    const sessionId = request.cookies.sessionId

    if(!sessionId){
        return reply.status(401).send({
            error: 'Não autorizado X'
        })
    }
}