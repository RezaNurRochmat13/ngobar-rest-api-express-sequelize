const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()

const generateToken = (user) => {
  const token = jwt.sign(
    { user_id: user.id, email: user.email },
    process.env.SECRET_KEY,
    {
      expiresIn: "12h",
    }
  );

  return token;
}

module.exports = { generateToken }