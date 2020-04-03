import express from 'express';
import bcrypt from 'bcryptjs';

import { User } from '../models/user';

export const usersRouter = express.Router();

usersRouter.post('/login', async (request, response) => {
  if (!request.body) {
    response.status(400).send({ error: 'No body' });

    return;
  }

  const user = await User.findByCredentialsSignIn(request.body.userName, request.body.password);

  if (!user) {
    response.status(400).send({ error: 'userName' });

    return;
  }

  const token = await user.generateAuthToken();

  response.status(201).send({ user, token });
});

usersRouter.post('/', async (request, response) => {
  if (!request.body) {
    response.status(400).send({ error: 'No body' });

    return;
  }

  const credentialsExist = await User.findByCredentialsSignUp(request.body.name, request.body.email);

  if (credentialsExist) {
    response.status(400).send({ error: credentialsExist });

    return;
  }

  const user = new User(request.body);

  user.password = await bcrypt.hash(user.password, 8);
  const token = await user.generateAuthToken();

  response.status(201).send({ user, token });
});
