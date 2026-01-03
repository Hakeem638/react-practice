import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovies, getPopularMovies } from "../services/api.js";   
import "../css/Home.css"



function Home() {

  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.log(error);
        setError('Failed to fetch popular movies...');
      }
      finally {
        setLoading(false);
      }
    }

    loadPopularMovies();  
  }, []);  

  

  const handleSearch = async(event) => {
    event.preventDefault();
   if (!searchTerm.trim()) {
     return;
   }
   if (loading) {
     return;
   }

   setLoading(true)
   try {
    const searchResults =  await searchMovies(searchTerm)
    setMovies(searchResults)
    setError(null)
  } catch (error) {
      console.log(error);
      setError('Failed to fetch search results...');
  } finally {
      setLoading(false);
  }
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }
  

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input value={searchTerm} onChange={handleChange} type="text" placeholder="Search for movies..."  className="search-input"/>
        <button type="submit" className="search-button">Search</button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading movies...</div>
      ) : 
      <div className="movies-grid">
         {movies.map((movie) => (
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) && <MovieCard key={movie.id} movie={movie} />
      ))}
      </div>}
    </div>
  )
}

export default Home