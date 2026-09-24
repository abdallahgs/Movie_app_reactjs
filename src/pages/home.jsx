import MovieCard from "../components/moviecard"
import {useState} from "react"
import "./css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
       {id: 1, title: "john wick", release_date: "2023-01-01" },
       {id: 2, title: "terminator", release_date: "2023-01-01" },
       {id: 3, title: "toy story", release_date: "2023-01-01" },
       {id: 4, title: "john wick 4", release_date: "2023-01-01" },
    ]
    const handleSearch = (e) =>{
        e.preventDefault() // doesnt delete search query righ after clicking on button
        alert(`Searching for ${searchQuery}`);
        setSearchQuery("");
    };
    return <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                type="text" 
                placeholder="Search for a movie ..." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // this is how you update the state from input
                />
                <button type="submit" className="search-button">Search</button>
            </form>
        <div className="movies-grid">
            {movies.map(
                (movie) => (
                //movie.title.toLowerCase().includes(searchQuery) && (
                <MovieCard movie={movie} key={movie.id}/>
            //)
        ))}
        </div>
    </div>
}

export default Home