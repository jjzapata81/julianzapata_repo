import dotenv from 'dotenv';
import Server from './infrastructure/server/server';

dotenv.config();

const server = new Server();

server.listen();