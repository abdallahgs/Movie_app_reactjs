import "../css/favorites.css"
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/moviecard";

function Favorite() {
    const { favorites } = useMovieContext();
    if (favorites.length > 0)
    {
        return(
        <div className="favorites-empty">
        <h2>Your Favorite Movies</h2>
        <div className="movies-grid">
                {favorites.map((movie) => (
                //movie.title.toLowerCase().includes(searchQuery) && (
                <MovieCard movie={movie} key={movie.id}/>
            //)
        ))}
        </div>
        </div>
    );
}
    return (
        <div className="favorite-empty">
            <h2>No favorite movies yet.</h2>
            <p>Start adding some! and they will appear here.</p>
        </div>
    );
}

export default Favorite;