import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";

import Hero from "./components/home/Hero.jsx";
import Navbar from "./components/utilities/Navbar.jsx";
import Gallery from "./components/gallery/Gallery.jsx";
import Contact from "./components/utilities/Contact.jsx";
import About from "./components/about/About.jsx";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Contact />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
