import express from 'express';
import mongoose from 'mongoose';

export const filmRouter = express.Router();

filmRouter.get('/api/v1/films', async (req, response) => {
  const { connection } = mongoose;

  connection.collection('films').find({}).toArray((err, result) => {
    if (err) throw err;
    response.status(200).json(result);
  });
});

filmRouter.get('/api/v1/films/:filmId', async (req, response) => {
  const { connection } = mongoose;

  const filmId = new mongoose.Types.ObjectId(req.params.filmId);
  const result = await connection.collection('films').findOne({ _id: filmId });

  response.status(200).json(result);
});
