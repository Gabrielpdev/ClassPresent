import 'dotenv/config';
import express from 'express';
import { router } from './routes';
import cors from 'cors';

import './database/connection';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server started on port ${process.env.PORT || 8080} 🚀`)
});