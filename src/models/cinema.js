import mongoose, { Schema } from 'mongoose';

const cinemaSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  id: Number,
  label: String,
  cinema: String,
  address: String,
  cinemaCode: String,
});

export const Cinema = mongoose.model('cinema', cinemaSchema, 'cinemas');
