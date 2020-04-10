const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res.status(401).send({ message: 'authorization required' });
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    console.log(token);
    console.log(payload);
    console.log(err);
    return res.status(401).send({ message: 'authorization required' });
  }
  req.user = payload;
  next();
};