import { useState } from 'react'
import MovieCard from './components/MovieCard'

function App() {
  const movies=[
    { title: 'The Woman King', release_date: '4 Nov, 2024' },
    { title: 'Avatar 3', release_date: '20 Dec, 2024' },
    { title: 'Guardians of the Galaxy Vol. 3', release_date: '5 May, 2024' },
    { title: 'Dune: Part Two', release_date: '17 Oct, 2024' },
    { title: 'Mission: Impossible – Dead Reckoning Part One', release_date: '12 Jul, 2024' },
  ];

  return (
    <>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </>
  )
}

export default App
