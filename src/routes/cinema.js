import express from 'express';
import mongoose from 'mongoose';

export const cinemaRouter = new express.Router();

cinemaRouter.get('/api/v1/session/:sessionId', async (req, response) => {
  const { connection } = mongoose;
  const sessionId = new mongoose.Types.ObjectId(req.params.sessionId);
  const session = await connection.collection('sessions').findOne({ _id: sessionId });

  session.cinema = await connection.collection('cinemas').findOne({ _id: session.cinemaId });

  session.film = await connection.collection('films').findOne({ _id: session.filmId });
  response.status(200).json(session);
});
