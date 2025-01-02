import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Hero from "./components/home/Hero.jsx";
import Navbar from "./components/utilities/Navbar.jsx";
import Gallery from "./components/gallery/Gallery.jsx";
import Contact from "./components/utilities/Contact.jsx";
import About from "./components/about/About.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
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


