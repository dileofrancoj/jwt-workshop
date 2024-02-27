import jwt from 'jsonwebtoken';
import fs from 'fs';

const key = fs.readFileSync('./keys/private.pem');
const signOptions = {
  expiresIn: '2h',
  algorithm: 'RS256',
};
// Windows: Putty Gen
// Ubuntu & Mac:
/*
  openssl genpkey -algorithm RSA -out private.pem -pkeyopt rsa_keygen_bits:2048
  openssl rsa -pubout -in private.pem -out public.pem
*/

export const createToken = (payload) => jwt.sign(payload, key, signOptions);
