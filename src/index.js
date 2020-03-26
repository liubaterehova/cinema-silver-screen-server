import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

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

app.get('/api/v1/session/:sessionId', async (req, response) => {
  const { connection } = mongoose;
  const sessionId = new mongoose.Types.ObjectId(req.params.sessionId);
  const session = await connection.collection('sessions').findOne({ _id: sessionId });

  session.cinema = await connection.collection('cinemas').findOne({ _id: session.cinemaId });

  session.film = await connection.collection('films').findOne({ _id: session.filmId });
  response.status(200).json(session);
});

app.get('/api/v1/sessions/:filmId', async (req, response) => {
  const { connection } = mongoose;

  const filmId = new mongoose.Types.ObjectId(req.params.filmId);

  const sessions = await connection.collection('sessions').find({ filmId }).toArray();

  await Promise.all(sessions.map(async (session) => {
    session.cinema = await connection.collection('cinemas').findOne({ _id: session.cinemaId });

    response.status(200).json(sessions);
  }));
});

app.get('/api/v1/films', async (req, response) => {
  const { connection } = mongoose;

  connection.collection('films').find({}).toArray((err, result) => {
    if (err) throw err;
    response.status(200).json(result);
  });
});

app.get('/api/v1/films/:filmId', async (req, response) => {
  const { connection } = mongoose;

  const filmId = new mongoose.Types.ObjectId(req.params.filmId);
  const result = await connection.collection('films').findOne({ _id: filmId });

  response.status(200).json(result);
});

app.get('/api/v1/cinemas', async (req, response) => {
  const { connection } = mongoose;

  connection.collection('cinemas').find({}).toArray((err, result) => {
    if (err) throw err;
    response.status(200).json(result);
  });
});

const init = async () => {
  await mongoose.connect('mongodb://localhost:27017/lab-project');
  // eslint-disable-next-line no-console
  app.listen(port, () => console.log(`Server is listening on ${port} port`));
};

init();
