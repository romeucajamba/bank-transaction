import { server } from './app';
import { env } from './env/index';



server.listen({
    port: env.PORT,
}).then(() => {
    console.log('server running in port 4000')
})