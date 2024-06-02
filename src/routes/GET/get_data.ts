import { FastifyInstance } from 'fastify';
import { connection } from '../../database/db';
import { randomUUID } from 'crypto';

export async function transactions(server: FastifyInstance) {

    server.get('/transact', async () => {
    
        const insertData = await connection.trasactions.create({
            data:{
                id: randomUUID(),
                title: 'Testando a criação de transação',
                amount: 100
            }
        })
        return insertData
    })
}