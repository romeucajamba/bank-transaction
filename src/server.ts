import fastify from 'fastify';


const server = fastify()

server.get('/home', async () => {
    
})

server.listen({
    port: 3333
}).then(() => {
    console.log('server running in port 3333')
})