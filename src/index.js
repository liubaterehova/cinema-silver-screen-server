import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import 'express-async-errors';

import { cinemaRouter } from './routes/cinema';
import { filmRouter } from './routes/film';
import { sessionRouter } from './routes/session';
import { usersRouter } from './routes/users';

const app = express();
const port = process.env.PORT || 3010;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/films/', filmRouter);
app.use('/cinemas/', cinemaRouter);
app.use('/sessions/', sessionRouter);
app.use('/users/', usersRouter);

app.use((err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.error(err);
  res.status(500).send('Something broke!');
  next(err);
});

const init = async () => {
  await mongoose.connect('mongodb://localhost:27017/lab-project');
  // eslint-disable-next-line no-console
  app.listen(port, () => console.log(`Server is listening on ${port} port`));
};

init();
