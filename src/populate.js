import mongoose from 'mongoose';

import { Session } from './models/session';
import { Cinema } from './models/cinema';
import { Film } from './models/film';
import { SESSIONS, CINEMAS, FILMS } from './constants';

const f = async () => {
  await mongoose.connect('mongodb://localhost:27017/lab-project', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  const { connection } = mongoose;

  await connection.db.dropDatabase();

  await Promise.all(FILMS.map(async (filmData) => {
    const film = new Film(filmData);

    await film.save();
  }));

  await Promise.all(CINEMAS.map(async (cinemaData) => {
    const cinema = new Cinema(cinemaData);

    await cinema.save();
  }));

  await Promise.all(SESSIONS.map(async (sessionData) => {
    const session = new Session(sessionData);

    await session.save();
  }));

  mongoose.disconnect();
};

f();
