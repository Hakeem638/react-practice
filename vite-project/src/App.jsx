import { useState } from 'react'
import MovieCard from './components/MovieCard'

function App() {

  return (
    <>
      <MovieCard movie={{ title: 'The Woman King', release_date: '4 Nov, 2024' }} />
    </>
  )
}

export default App
