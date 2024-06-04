import { describe, test, beforeAll, afterAll } from 'vitest';
import request from 'supertest';
import { server } from '../app';

beforeAll( async () => {
    await server.ready()
})

afterAll( async () => {
    await server.close()
})


describe('create transaction', () => {
    test('shold return 201, that mean the transaction created', async () => {
        
      await request(server.server).post('/transactions').send({
        title: 'New transaction created on test',
        amount: 500,
        type: 'credit'
      }).expect(201)

    })
})