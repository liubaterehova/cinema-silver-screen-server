import mongoose, { Schema } from 'mongoose';

const cinemaSchema = new Schema({
  id: Number,
  label: String,
  cinema: String,
  address: String,
  cinemaCode: String,
});

export const Cinema = mongoose.model('cinema', cinemaSchema, 'cinemas');
