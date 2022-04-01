import React, {useEffect, useState} from "react";
import service from './service';
const Movies = () => {
    useEffect(() =>
                  service.findAllMovies()
                      .then(movies => setMovies(movies)));

    const deleteMovie = (movie) =>
        service.deleteMovie(movie._id)
            .then(() => setMovies(movies.filter(m => m !== movie)));

    const [movies, setMovies] = useState([]);
    const createMovie = () =>
        service.createMovie({title: 'New Movie'})
            .then(createdMovie => setMovies([createdMovie, ...movies]));
    const [newMovieTitle, setNewMovieTile] = useState('');
    const createInputMovie = () =>
        service.createMovie({title: `${newMovieTitle}`})
            .then(createdMovie => setMovies([createdMovie, ...movies]));

    const [movie, setMovie] = useState({title: ''});
    const findMovieById = (movie) =>
        service.findMovieById(movie._id)
            .then(movie => setMovie(movie));

    const updateMovie = (event) =>
        setMovie({...movie, title: event.target.value});
    const saveMovie = () =>
        service.updateMovie(movie)
            .then(() => setMovies(
                movies.map(m => m._id === movie._id ? movie : m)
            ));

    return(
        <div>
            <h2>Movies</h2>
            <span>
                <input type="text" className="form-control w-75" placeholder="New Movie"
                       value={newMovieTitle} onChange={(event => setNewMovieTile(event.target.value))}/>
                <button
                    onClick={createInputMovie}
                    className="btn btn-success float-end">
                    Create
                </button>
            </span>
            <button
                onClick={createMovie}
                className="btn btn-success">
                Create a movie called New Movie
            </button>
            <br/>
            <br/>
            <ul className="list-group">
                <li className="list-group-item">
                    <button
                        onClick={saveMovie}
                        className="btn btn-primary float-end">
                        Save
                    </button>
                    <input
                        onChange={updateMovie}
                        defaultValue={movie.title}
                        className="form-control"/>
                </li>
                {
                    movies.map(movie =>
                                   <li key={movie._id}
                                       className="list-group-item">
                                       <button
                                           onClick={() => findMovieById(movie)}
                                           className="btn btn-warning float-end ms-2">
                                           Edit
                                       </button>
                                       {movie.title}
                                       <button className="btn btn-danger float-end"
                                               onClick={() => deleteMovie(movie)}>
                                           Delete
                                       </button>
                                   </li>
                    )
                }
            </ul>
        </div>
    )};
export default Movies;
