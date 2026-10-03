import MovieCard from "../components/moviecard"
import {useState , useEffect} from "react"
import {searchMovies , getPopularMovies} from "../services/api"
import "../css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    //movies.length === 0 && !loading && !error && (
    //   <div>No movies are available.</div>
    //);
    //const movies = getPopularMovies(); // thios fetches movies all the time after every re render
    const [movies, setMovies] = useState([]); // any update to movie list it updates the componenet
    // useEffect(()=> {},[]) if any of the values change in the last brackets it will run it again if not it only runs once after the initial render
    
    const performSearch = async (query) => {
    if (!query.trim()) return;

    setLoading(true);

    try {
        const searchResults = await searchMovies(query);
        setMovies(searchResults);
        setError(null);
    } catch (err) {
        console.log(err);
        setError("failed to search movies . . .");
    } finally {
        setLoading(false);
    }
    };
    useEffect(() => { 
        const loadPopularMovies = async () => {
        try{
            const popularMovies = await getPopularMovies();
            setMovies(popularMovies)
        }catch(err){
            console.log(err)
            setError("failed to load movies . . .")

            //console.error("Failed to load popular movies", error);
        }
        finally{
            setLoading(false)
           }
        };
        loadPopularMovies();
    }, []);
    useEffect(() => {
    if (!searchQuery.trim()) return;

    const timer = setTimeout(() => {
        performSearch(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
}, [searchQuery]);


    const handleSearch = async (e) =>{
        e.preventDefault() // doesnt delete search query righ after clicking on button
        
        if(!searchQuery.trim()) return;
        performSearch(searchQuery);
        //alert(`Searching for ${searchQuery}`);
        if (loading) return
        //setLoading(true);
        //try{
        //    const searchResults = await searchMovies(searchQuery);
        //    setMovies(searchResults);
        //    setError(null);
        //}
        //catch(err){
         //   console.log(err);
        //    setError("failed to search movies . . .")
        //}
        //finally{
        //    setLoading(false);
       // }
        //setSearchQuery(""); reset search query after search
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
                <button type="submit" className="search-button">
                    Search
                    </button>
            </form>
            {error && <div className="error">{error}</div>}
            
            {loading ? (<div className="loading">Loading...</div>
                ) : movies.length === 0 && searchQuery.trim() ? (
                    <div>No movies are available with that name.</div>
            ) : (
                <div className="movies-grid">
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
        ))}
    </div>
)}

    </div>
}

export default Home
/*
            ( <div className="loading">Loading . . . </div>
            ):( <div className="movies-grid">
                {movies.map((movie) => (
                movie.title.toLowerCase().includes(searchQuery) && (
                <MovieCard movie={movie} key={movie.id}/>
            )
        ))}
        </div>
    )
*/