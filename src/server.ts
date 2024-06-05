import { server } from './app';

server.listen({
    port: 4000,
}).then(() => {
    console.log('server running in port 3333')
})