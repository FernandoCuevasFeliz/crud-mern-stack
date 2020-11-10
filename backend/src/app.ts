import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { port } from './config';

const app: express.Application = express();

import routes from './routes';

// settings
app.set('port', port);

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api', routes);

export default app;
