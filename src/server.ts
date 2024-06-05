import { server } from './app';
const port = process.env.PORT || 4000;

server.listen({
    port: port
}).then(() => {
    console.log('server running in port 3333')
})