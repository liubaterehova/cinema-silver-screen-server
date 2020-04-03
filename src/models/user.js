import mongoose, { Schema } from 'mongoose';
import validator from 'validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const userSchema = Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('email is invalid');
        }
      },
    },
    password: {
      type: String,
      trim: true,
      validate(value) {
        if (value.toLowerCase().includes('password')) {
          throw new Error('Password should not contain word: password');
        }
      },
    },
    role: {
      type: String,
      default: 'guest',
    },
    phone: {
      type: String,
      trim: true,
      validate(value) {
        if (!validator.isMobilePhone(value)) {
          throw new Error('Phone is invalid');
        }
      },
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
);

userSchema.methods.generateAuthToken = async function authToken() {
  const user = this;

  const token = jwt.sign({ _id: user._id.toString() }, 'htrdyrtdytrdhrtd');

  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

userSchema.statics.findByCredentialsSignIn = async function findByCredentialsSignIn(userName, password) {
  const User = this;
  const user = await User.findOne({ userName });

  if (!user) return null;
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return null;

  return user;
};

userSchema.statics.findByCredentialsSignUp = async function findByCredentialsSignUp(userName, email) {
  const User = this;
  const user = await User.findOne({ userName });
  const userEmail = await User.findOne({ email });

  if (user) return 'name';
  if (userEmail) return 'email';

  return null;
};

export const User = mongoose.model('User', userSchema);
