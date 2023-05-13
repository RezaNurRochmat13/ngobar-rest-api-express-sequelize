const express = require('express')
const router = express.Router()
const db = require('./../models')
const User = db.User
const authenticateTokenMiddleware = require('../middleware/authentication')

// Inject middleware as global middleware
router.use(authenticateTokenMiddleware)

// GET /users
router.get('/api/users', async (request, response) => {
  const users = await User.findAll({ offset: request.query.page, limit: request.query.size })
  const userCount = await User.count()

  return response.status(200).json({
    data: users,
    meta: {
      page: request.query.page,
      count: userCount,
      size: users.length,
    }
  })
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

// DELETE /users/:id
router.delete('/api/users/:id', async (request, response) => {
  const user = await User.findByPk(request.params.id)

  if(!user) return response.status(404).json({message: 'Users not found'})

  User.destroy({where: { id: request.params.id }})

  return response.status(200).json({data: user})
})

module.exports = router
