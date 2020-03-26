import mongoose, { Schema } from 'mongoose';

const filmSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: Number,
  name: String,
  poster: String,
  type: String,
  description: String,
});

export const Film = mongoose.model('film', filmSchema, 'films');
