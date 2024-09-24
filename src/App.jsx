import { Routes, Route } from 'react-router-dom'
import HomePage from './components/Views/HomePage'
import LimitedEdition from './components/Views/LimitedEdition'
import FooterHome from './components/FooterHome'
import HeaderHome from './components/Header.Home'
import AboutPage from './components/Views/AboutPage'
import MoviePage from './components/Views/MoviePage'
import './App.css'

function App() {
  return (

      <div className="App">
        <HeaderHome />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/limited-edition" element={<LimitedEdition />} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/movie" element={<MoviePage />} />
    </Routes>
    <FooterHome />
  </div>
  )
}

export default App
