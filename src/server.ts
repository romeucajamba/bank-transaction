import { server } from './app';

server.listen({
    port: 3333
}).then(() => {
    console.log('server running in port 3333')
})