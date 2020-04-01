import express from 'express';
import mongoose from 'mongoose';

export const filmRouter = express.Router();

filmRouter.get('/', async (req, response) => {
  const { connection } = mongoose;

  const films = await connection.collection('films').find({}).toArray();

  if (!films.length) {
    response.status(404).send(films);

    return;
  }

  response.status(200).send(films);
});

filmRouter.get('/:filmId', async (req, response) => {
  const { connection } = mongoose;

  const filmId = new mongoose.Types.ObjectId(req.params.filmId);
  const result = await connection.collection('films').findOne({ _id: filmId });

  if (!result) {
    response.status(404).send();

    return;
  }

  response.status(200).send(result);
});
