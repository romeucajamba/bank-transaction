import fastify from 'fastify';

//Rotas
import { transactionsRoute } from './routes/POST/transactions';
import { getSummary } from './routes/GET/summary';
import { getTransactionById } from './routes/GET/transaction_id';
import { getTransaction } from './routes/GET/transactions';

const server = fastify()

//Registar plugins ou rotas
server.register(transactionsRoute)

//Resumo das transações
server.register(getSummary)

//pegando transações específicas
server.register(getTransactionById)

//Pegando todas as transações
server.register(getTransaction)



server.listen({
    port: 3333
}).then(() => {
    console.log('server running in port 3333')
})