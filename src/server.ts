import 'dotenv/config';
import express from 'express';
import { router } from './routes';
import cors from 'cors';

import './database/connection';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen((process.env.APP_PORT || 8000), () => {
  console.log("Server started 🚀")
});