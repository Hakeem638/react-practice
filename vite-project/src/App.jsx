import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Favorite from "./pages/Favorite"
import NavBar from "./components/NavBar"
import "./css/App.css"  
import { MovieProvider } from "./contexts/MovieContext"

function App() {
  
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </main> 
    </MovieProvider>          
  )
}

export default App
