import mongoose, { Schema } from 'mongoose';

const sessionSchema = new Schema({
  id: Number,
  filmId: {
    type: mongoose.Types.ObjectId,
    ref: 'films',
  },
  src: String,
  city: String,
  cityCode: String,
  date: String,
  dateCode: String,
  cinemaId: {
    type: mongoose.Types.ObjectId,
    ref: 'cinemas',
  },
  time: String,
  hour: Number,
  emptySeats: Number,
});

export const Session = mongoose.model('session', sessionSchema, 'sessions');
