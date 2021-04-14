
import { fastify } from 'fastify';
import bundles from './bundles';

const server = fastify({ logger: true });

server.register(bundles);

const init = async () => {
    try {
        await server.listen(3000, 'localhost');
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

init();
