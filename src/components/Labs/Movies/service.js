const URL = 'http://localhost:4000/rest/movies';
const findAllMovies = () =>
    fetch(URL).then(res => res.json());

const deleteMovie = (id) =>
    fetch(`${URL}/${id}`, {method: 'DELETE',});

const createMovie = (movie) =>
    fetch(URL, {method: 'POST',
         body: JSON.stringify(movie),
         headers: {'content-type': 'application/json'}})
        .then(res => res.json());

const findMovieById = (id) =>
    fetch(`${URL}/${id}`)
        .then(res => res.json());

const updateMovie = (movie) =>
    fetch(`${URL}/${movie._id}`, {method: 'PUT',
         body: JSON.stringify(movie),
         headers: {
              'content-type': 'application/json'}})
        .then(res => res.json());

export default {findAllMovies, deleteMovie, createMovie, findMovieById, updateMovie};
