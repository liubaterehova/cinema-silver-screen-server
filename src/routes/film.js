import express from 'express';
import mongoose from 'mongoose';

export const filmRouter = express.Router();

filmRouter.get('/', async (req, response) => {
  const { connection } = mongoose;

  connection.collection('films').find({}).toArray((err, result) => {
    if (err) throw response.sendStatus(400).send(err);

    response.status(200).send(result);
  });
});

filmRouter.get('/:filmId', async (req, response) => {
  const { connection } = mongoose;

  const filmId = new mongoose.Types.ObjectId(req.params.filmId);
  const result = await connection.collection('films').findOne({ _id: filmId });

  response.status(200).send(result);
});
