import fastify from 'fastify';
import { connection } from './database/db';
import { randomUUID } from 'crypto';


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
    port: 3333
}).then(() => {
    console.log('server running in port 3333')
})