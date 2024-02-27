/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line arrow-body-style

export const products = async (req, res) => {
  res.json({ message: `hi ${req.usr.username}` });
};
