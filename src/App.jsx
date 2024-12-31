import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './components/home/Hero.jsx'
import Navbar from './components/utilities/Navbar.jsx'
import Gallery from './components/gallery/Gallery.jsx'
import Contact from "./components/utilities/Contact"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Contact/>
      </BrowserRouter>
    </>
  )
}

export default App;