const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 8081 || process.env.PORT;
const userController = require('./controller/user.controller')


app.use(express.json())
app.use(morgan('combined'))
app.use(userController)


app.get('/ping', (req, res) => {
  res.json({ping: true})
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
