import { FastifyInstance } from 'fastify';
import NotFoundException from '../shared/exceptions/not-found.exeption';
import bundlesService from './bundles.service';
import { CreateBundleDto } from './dto/create-bundle.dto';

export function findAll(server:FastifyInstance) {
    server.get('/bundles', async () => {
        return bundlesService.findAll();
    });
}

export function findOne(server:FastifyInstance) {
    server.get<{Params: { id: string }}>('/bundles/:id', async (request, reply) => {
        try {
            return bundlesService.findOne(request.params.id);
        } catch (err) {
            if (err instanceof NotFoundException){
                reply.code(404);
                return {
                    status: 404,
                    message: err.message
                };
            }

            throw err;
        }
    });
}

export function create(server:FastifyInstance) {
    server.post<{Body: CreateBundleDto}>('/bundles', async (request) => {
        return bundlesService.create(request.body);
    });
}

export function remove(server:FastifyInstance) {
    server.delete<{Params: { id: string }}>('/bundles/:id', async (request, reply) => {
        bundlesService.remove(request.params.id);
        reply.code(204);
    });
}