import fs from 'fs';
import jwt from 'jsonwebtoken';

const key = fs.readFileSync('./keys/public.pem');

export const auth = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const [, token] = authorization.split(' ');
    const payload = jwt.verify(token, key);
    req.usr = payload; // {id: ...., username: ''}
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};
