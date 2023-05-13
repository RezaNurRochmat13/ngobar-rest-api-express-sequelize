const db = require('./../models')
const User = db.User
const express = require('express')
const router = express.Router()

// GET /users
router.get('/api/users', async (request, response) => {
  const users = await User.findAll()

  return response.status(200).json({data: users})
})

// GET /users/:id
router.get('/api/users/:id', async (request, response) => {
  const user = await User.findByPk(request.params.id)

  if(!user) return response.status(404).json({message: 'Users not found'})

  return response.status(200).json({data: user})
})

// POST /users
router.post('/api/users', async (request, response) => {
  const user = await User.create(request.body)

  if(!user) return response.status(422).json({message: 'Failed create user. Please try again'})

  return response.status(200).json({data: user})
})

// PUT /users/:id
router.put('/api/users/:id', async (request, response) => {
  const user = await User.findByPk(request.params.id)

  if(!user) return response.status(404).json({message: 'Users not found'})

  User.update(request.body, { where: {id: request.params.id }})

  return response.status(200).json({ message: 'User updated'})
})

router.delete('/api/users/:id', async (request, response) => {
  const user = await User.findByPk(request.params.id)

  if(!user) return response.status(404).json({message: 'Users not found'})

  User.destroy({where: { id: request.params.id }})

  return response.status(200).json({data: user})
})

module.exports = router
