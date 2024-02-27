/* eslint-disable function-paren-newline */
import express from 'express';
import cors from 'cors';
// eslint-disable-next-line no-unused-vars
import * as _ from './config/env';
import routes from './api/routes';
import dbConnect from './database/config';
import { auth } from './middlewares/auth';
import products from './modules/products/routes';

const app = express();
const port = process.env.PORT ?? 8006;
const host = '0.0.0.0'; // localhost

app.use(cors());
app.use(express.json());

dbConnect();

app.use('/api/ping', (req, res) => res.json({ message: 'pong' })); //
app.use('/api/v1', routes); // públicas
app.use('/api/v1', auth, products);

app.use((_, res) => {
  res.sendStatus(404);
});
app.use((error, _, res) => {
  res.sendStatus(500);
});

app.listen(port, host, () => {
  console.info(`App listening on port ${port}`);
});
