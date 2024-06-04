import fastify from 'fastify';
import  cookie  from '@fastify/cookie';

//Rotas
import { transactionsRoute } from './routes/POST/transactions';
import { getSummary } from './routes/GET/summary';
import { getTransactionById } from './routes/GET/transaction_id';
import { getTransaction } from './routes/GET/transactions';

 export const server = fastify()

//Hook global
server.addHook('preHandler', async (request) => {
    console.log(`${request.method} ${request.url}`)
})

//Nosso cookie
server.register(cookie)

//Registar plugins ou rotas
server.register(transactionsRoute)

//Resumo das transações
server.register(getSummary)

//pegando transações específicas
server.register(getTransactionById)

//Pegando todas as transações
server.register(getTransaction)

