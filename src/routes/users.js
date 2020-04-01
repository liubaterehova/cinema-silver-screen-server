import express from 'express';
import bcrypt from 'bcryptjs';

import { User } from '../models/user';

export const usersRouter = express.Router();

usersRouter.post('/', async (request, response) => {
  if (!request.body) {
    response.status(400).send({ error: 'No body' });

    return;
  }

  const user = new User(request.body);

  try {
    user.password = await bcrypt.hash(user.password, 8);
    const token = await user.generateAuthToken();

    response.status(201).send({ user, token });
  } catch (e) {
    response.status(400).send({ error: e.toString() });
  }
});
