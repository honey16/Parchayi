import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Home from './components/home/Home.jsx';
import Navbar from './components/utilities/Navbar.jsx';
import Gallery from './components/gallery/Gallery.jsx';
import Contact from './components/utilities/Contact.jsx';
import UnsplashGallery from './components/gallery/Gallery.jsx';
import About from './components/about/About.jsx';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/unsplash" element={<UnsplashGallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Contact />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

