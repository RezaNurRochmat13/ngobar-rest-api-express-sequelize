const db = require('./../models')
const Movie = db.Movie

const findAll = async (page, size) => {
  return Movie.findAll({ offset: page, limit: size })
}

const count = async () => {
  return await Movie.count()
}

const findById = async (id) => {
  return await Movie.findByPk(id)
}

module.exports = {
  findAll,
  findById,
  count,
}
