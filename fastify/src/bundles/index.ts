import { FastifyInstance } from 'fastify';
import { findAll, findOne, create, remove } from './bundles.controller';

export default async function bundles(server: FastifyInstance) {
    findAll(server);
    findOne(server);
    create(server);
    remove(server);
}