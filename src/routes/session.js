import express from 'express';
import mongoose from 'mongoose';

export const sessionRouter = express.Router();

sessionRouter.get('/:sessionId', async (req, response) => {
  const { connection } = mongoose;

  const sessionId = new mongoose.Types.ObjectId(req.params.sessionId);
  const session = await connection.collection('sessions').findOne({ _id: sessionId });

  session.cinema = await connection.collection('cinemas').findOne({ _id: session.cinemaId });
  session.film = await connection.collection('films').findOne({ _id: session.filmId });

  response.status(200).send(session);
});

sessionRouter.get('/', async (req, response) => {
  const { connection } = mongoose;

  const filmId = new mongoose.Types.ObjectId(req.query.filmId);
  const sessions = await connection.collection('sessions').find({ filmId }).toArray();

  await Promise.all(sessions.map(async (session) => {
    session.cinema = await connection.collection('cinemas').findOne({ _id: session.cinemaId });
  }));

  if (!sessions.length) {
    response.status(404).send(sessions);

    return;
  }

  response.status(200).send(sessions);
});
