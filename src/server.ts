import 'dotenv/config';
import express from 'express';
import { router } from './routes';

import './database/connection';

const app = express();

app.use(express.json());
app.use(router);

app.listen(process.env.APP_PORT || 3333, () => {
  console.log("Server started 🚀")
});