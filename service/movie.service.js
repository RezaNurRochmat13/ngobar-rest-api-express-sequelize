const movieRepository = require('../repository/movie.repository');

const findAllMovies = async (page, size) => {
  return await movieRepository.findAll(page, size);
}

const countMovies = async () => {
  return await movieRepository.count();
}

const findByMovieId = async (id) => {
  return await movieRepository.findById(id);
}

module.exports = {
  findAllMovies,
  findByMovieId,
  countMovies,
}
