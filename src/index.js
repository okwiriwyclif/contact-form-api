import Fastify from 'fastify';
import dotenv from 'dotenv';
import  contactController  from './controllers/contactController.js';
import cors from '@fastify/cors';

dotenv.config();

const fastify = Fastify({ logger: true });

// Register CORS plugin
fastify.register(cors, {
    origin: '*', // Allow all origins. You can restrict this to specific origins.
    methods: ['GET', 'POST'], // Allowed methods
  });

fastify.post('/contact', contactController);

fastify.get('/', ()=>{
    return 'hello world'
});

fastify.listen({ port: 3001 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server listening at ${address}`);
});
