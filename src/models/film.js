import mongoose, { Schema } from 'mongoose';

const filmSchema = new Schema({
  id: Number,
  src: String,
  name: String,
  type: String,
  city: String,
  cityCode: String,
  date: String,
  dateCode: String,
  description: String,
  cinema: String,
  time: String,
  hour: Number,
  emptySeats: Number,
});

export const Film = mongoose.model('films', filmSchema, 'films');
