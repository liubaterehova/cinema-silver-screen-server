import express from 'express';
import mongoose from 'mongoose';

export const cinemaRouter = new express.Router();

cinemaRouter.get('/', async (req, response) => {
  const { connection } = mongoose;

  const result = await connection.collection('cinemas').find({}).toArray();

  if (!result.length) {
    response.status(404).send(result);

    return;
  }

  response.status(200).send(result);
});
