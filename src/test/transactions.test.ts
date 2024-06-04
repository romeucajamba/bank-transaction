import { describe, test, beforeAll, afterAll, expect } from 'vitest';
import request from 'supertest';
import { server } from '../app';
import { title } from 'process';



describe('Transactions routes', () => {

    beforeAll( async () => {
        await server.ready()
    })
    
    afterAll( async () => {
        await server.close()
    })
    

    test.only('shold return 201, that mean the transaction created', async () => {
        
      await request(server.server).post('/transactions').send({
        title: 'New transaction created on test',
        amount: 500,
        type: 'credit'
      }).expect(201)

    })

    test('Get all transactions', async () => {
       
        const createNewTransaction = await request(server.server).post('/transactions').send({
            title: 'New transaction created on test',
            amount: 500,
            type: 'credit'
          })
          
          const cookies = createNewTransaction.get('Set-Cookie')

          const transactionResponse = await request(server.server).get('/transactions').expect(200)
          
          expect(transactionResponse.body).toEqual([
            expect.objectContaining({
                title: 'New transaction created on test',
                amount: 500
            }),
          ])
    })
})
