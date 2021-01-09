import 'dotenv/config';
import express from 'express';
import { router } from './routes';
import cors from 'cors';

import './database/connection';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

// app.listen(process.env.PORT, '0.0.0.0');

app.listen((process.env.PORT || 8080), () => {
  console.log(`Server started on port ${process.env.PORT || 8080} 🚀`)
});

// app.set('port', (process.env.APP_PORT || 5000));
// //For avoidong Heroku $PORT error
// app.get('/', function(request, response) {
//   var result = 'App is running'
//   response.send(result);
// }).listen(app.get('port'), function() {
//   console.log('App is running, server is listening on port ', app.get('port'));
// });