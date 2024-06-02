import fastify from 'fastify';
import { transactionsRoute } from './routes/POST/transactions';

const server = fastify()

//Registar plugins ou rotas
server.register(transactionsRoute, {
    prefix: 'transaction'
})



server.listen({
    port: 3333
}).then(() => {
    console.log('server running in port 3333')
})