import express from 'express';
import cors from 'cors';
// eslint-disable-next-line no-unused-vars
import * as _ from './config/env';

const app = express();
const port = process.env.PORT ?? 8006;
const host = '0.0.0.0'; // localhost

app.use(cors());
app.use(express.json());

app.use('/api/ping', (req, res) => res.json({ message: 'pong' })); //

app.use((_, res) => {
  res.sendStatus(404);
});
app.use((error, _, res) => {
  res.sendStatus(500);
});

app.listen(port, host, () => {
  console.info(`App listening on port ${port}`);
});
