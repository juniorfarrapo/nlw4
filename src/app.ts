import 'reflect-metadata';
import express from 'express';
import createConnection from './database';
import { router } from './routes';

console.log(process.env.NODE_ENV);


createConnection();
const app = express();

app.use(express.json());
app.use(router);
export { app };