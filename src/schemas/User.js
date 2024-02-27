import { Schema, model } from 'mongoose';

const UserSchema = Schema({
  user: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const users = model('users', UserSchema);
