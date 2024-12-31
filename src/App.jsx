import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './components/home/Hero.jsx'
import Navbar from './components/utilities/Navbar.jsx'
import Gallery from './components/gallery/Gallery.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
