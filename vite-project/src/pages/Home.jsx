import { useState, useEffect, use } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovies, getPopularMovies } from "../services/api";   
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

  

  const handleSearch = (event) => {
    event.preventDefault();
    alert(`Searching for: ${searchTerm}`);
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

      <div className="movies-grid">
         {movies.map((movie) => (
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) && <MovieCard key={movie.id} movie={movie} />
      ))}
      </div>
    </div>
  )
}

export default Home