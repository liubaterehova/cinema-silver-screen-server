import mongoose from 'mongoose';

import { Film } from './models/film';
import { Cinema } from './models/cinema';
import { FILMS, CINEMAS } from './constants';

const f = async () => {
  await mongoose.connect('mongodb://localhost:27017/lab-project', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  const { connection } = mongoose;

  await connection.db.dropDatabase();

  FILMS.forEach(filmData => {
    const film = new Film(filmData);

    film.save();
  });

  Object.values(CINEMAS).forEach(cinemaData => {
    const cinema = new Cinema(cinemaData);

    cinema.save();
  });
};

f();
