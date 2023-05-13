const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const jwtUtil = require('../util/jwt.util')
const db = require('./../models')
const User = db.User


// POST /auth/register
router.post('/auth/register', async (request, response) => {
  const encryptedPassword = await bcrypt.hash(request.body.password, 10);

  const user = await User.create({
    email: request.body.email,
    gender: request.body.gender,
    password: encryptedPassword,
    role: request.body.role,
  })


  return response.status(201).json({data: user})
})

// POST /auth/login
router.post('/auth/login', async (request, response) => {
  const user = await User.findOne({ where: { email: request.body.email }});

  if (!user) return response.status(401).json({message: 'Unauthenticated user or not registered user'});

  const validatePassword = await bcrypt.compare(request.body.password, user.password);

  if (!validatePassword) return response.status(401).json({message: 'Invalid password'});

  const token = jwtUtil.generateToken(user)

  return response.status(201).json({auth_token: token})
})


module.exports = router
