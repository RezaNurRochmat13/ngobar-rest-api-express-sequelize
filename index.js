const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 8081 || process.env.PORT;
const userController = require('./controller/user.controller')
const movieController = require('./controller/movie.controller')
const authenticationController = require('./controller/authentication.controller')


app.use(express.json())
app.use(morgan('combined'))
app.use(authenticationController)
app.use(userController)
app.use(movieController)


app.get('/ping', (req, res) => {
  res.json({ping: true})
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
