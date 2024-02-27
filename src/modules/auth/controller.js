/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line arrow-body-style
import { users } from '../../schemas/User';
import { createToken } from '../../utils/auth';

export const auth = async (req, res) => {
  const { user } = req.body;
  const usr = await users.findOne({ user }).lean();
  if (!usr) return res.status(401).json({ message: 'unauthorized' });
  // VALIDAR PASSWORD
  // eslint-disable-next-line no-underscore-dangle
  const jwt = createToken({ id: usr._id, username: usr.user });
  return res.json({ message: 'authorized', jwt });
};
