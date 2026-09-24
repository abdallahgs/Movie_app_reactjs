import "./css/moviecard.css"

function MovieCard({movie}){
    function onFavoriteClicked(){
        alert("clicked")
    }
    return(
        <div className="movieCard">
            <div className="movieCard__image">
                <img src={movie.url} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClicked}>
                        Favorite 
                    </button>
                </div>
            </div>    
            <div className="movie-info">
                <h3>{movie.title}  </h3>
                <p>{movie.release_date}</p>
            </div>
        </div>  

    );
}
export default MovieCard;
// states: a state is a way to store and manage data in a component. It allows you to create dynamic and interactive components 
// that can change over time based on user interactions or other events. In React, 
// you can use the useState hook to create and manage state in functional components.
// The useState hook returns an array with two elements: the current state value and a function to update that value.
// You can use this function to update the state value, which will trigger a re-render of the component with the new state value.