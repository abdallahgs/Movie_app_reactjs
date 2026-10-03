// state manager for favorite movies
import { createContext, useState, useEffect, useContext } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext);
export const MovieProvider = ({children}) =>  {
    const [favorites, setfavorites] = useState([])
    useEffect(()=>{
        const storedFavs = localStorage.getItem("favorites")
        if (storedFavs) setfavorites(JSON.parse(storedFavs));
    }, [])
    useEffect(()=>{
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites])
    const addToFavorites = (movie) => {
        setfavorites((prevFavorites) => [...prevFavorites, movie]);
    }
    const removeFromFavorites = (movieId) => {
        setfavorites((prevFavorites) => prevFavorites.filter(movie => movie.id !== movieId));
    }
    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId);
    }
    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    };
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>

}
// children is anything inside the MovieProvider component, typically the components that need access to the movie context.