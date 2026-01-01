import { useState } from "react";
import MovieCard from "../components/MovieCard";



function Home() {

  const [searchTerm, setSearchTerm] = useState('');
  
  const movies=[
    { id: 1, title: 'The Woman King', release_date: '4 Nov, 2024' },
    { id: 2, title: 'Avatar 3', release_date: '20 Dec, 2024' },
    { id: 3, title: 'Guardians of the Galaxy Vol. 3', release_date: '5 May, 2024' },
    { id: 4, title: 'Dune: Part Two', release_date: '17 Oct, 2024' },
    { id: 5, title: 'Mission: Impossible – Dead Reckoning Part One', release_date: '12 Jul, 2024' },
  ];

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