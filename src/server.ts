import fastify from 'fastify';
import { transactions } from './routes/GET/get_data';

const server = fastify()

//Registar plugins ou rotas
server.register(transactions)



server.listen({
    port: 3333
}).then(() => {
    console.log('server running in port 3333')
})