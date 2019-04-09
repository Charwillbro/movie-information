import React, {Component} from 'react';

class MoviePreview extends Component {
    render() {
        const {movies, setCurrentMovieFunction} = this.props;

        return (
            <div className="movie-previews">
                {movies.map((movie) =>
                    <button
                        className="preview-button"
                        key={movie.title}
                        onClick={() => setCurrentMovieFunction(movie)}
                    >
                        <img
                            alt={movie.title}
                            src={movie.posterUrl}
                            height={250}
                        />
                        <p>{movie.title}</p>
                        <p>{movie.director}</p>
                        <p>Rating: {movie.rating}</p>
                        <p>{movie.releaseYear}</p>

                    </button>
                )}
            </div>
        );
    }
}

export default MoviePreview;
