import express from 'express';
import mongoose from 'mongoose';

export const cinemaRouter = new express.Router();

cinemaRouter.get('/', async (req, response) => {
  const { connection } = mongoose;

  connection.collection('cinemas').find({}).toArray((err, result) => {
    if (err) throw err;
    response.status(200).json(result);
  });
});
