import fastify from 'fastify';
import { connection } from './database/db';
import { randomUUID } from 'crypto';
import { env } from './env';


const server = fastify()

server.get('/home', async () => {
    
    const insertData = await connection.trasactions.create({
        data:{
            id: randomUUID(),
            title: 'Testando a criação de transação',
            amount: 100
        }
    })
    return insertData
})

server.listen({
    port: env.PORT
}).then(() => {
    console.log('server running in port 3333')
})