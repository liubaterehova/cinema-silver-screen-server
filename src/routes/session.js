import express from 'express';
import mongoose from 'mongoose';

export const sessionRouter = express.Router();

sessionRouter.get('/api/v1/sessions/:filmId', async (req, response) => {
  const { connection } = mongoose;

  const filmId = new mongoose.Types.ObjectId(req.params.filmId);

  const sessions = await connection.collection('sessions').find({ filmId }).toArray();

  await Promise.all(sessions.map(async (session) => {
    session.cinema = await connection.collection('cinemas').findOne({ _id: session.cinemaId });

    response.status(200).json(sessions);
  }));
});
