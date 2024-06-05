import { describe, test, beforeAll, afterAll, expect, beforeEach } from 'vitest';
import request from 'supertest';
import { server } from '../app';
import { execSync } from 'child_process';



describe('Transactions routes', () => {

    // Executa antes de todos os testes
    beforeAll( async () => {
        await server.ready()
    })
    
    // Executa após todos os testes
    afterAll( async () => {
        await server.close()
    })

    // A cada teste o meu banco de dados é zerado
    beforeEach(() => {
      execSync('npx prisma migrate reset --force --skip-seed');
  });
    

    test('shold return 201, that mean the transaction created', async () => {
        
      await request(server.server).post('/transactions').send({
        title: 'New transaction created on test',
        amount: 500,
        type: 'credit'
      }).expect(201)

    })

    test('Get all transactions', async () => {
       
        await request(server.server).post('/transactions').send({
            title: 'New transaction created on test',
            amount: 500,
            type: 'credit'
          })
          

          const transactionResponse = await request(server.server).get('/transactions').expect(200)
          
    })

    test('Get transaction by id', async () =>{
       await request(server.server).post('/transactions').send({
          title: 'New transaction created on test',
          amount: 500,
          type: 'credit'
      })


      const getTransaction = await request(server.server).get('/transactions').expect(200)

      const listTransactionId = getTransaction.body.transactionsId[0].id

      await request(server.server).get(`/transaction/${listTransactionId}`).expect(200)

    })

    test('Should be able to get summary', async () => {
        await request(server.server).post('/transactions').send({
          title: 'New transaction created on test',
          amount: 5000,
          type: 'credit'
        })

        await request(server.server).post('/transactions').send({
          title: 'New transaction created on test',
          amount: 2000,
          type: 'debit'
        })

        const summaryResponse = await request(server.server).get('/transactions/summary').expect(200)

    })
})
