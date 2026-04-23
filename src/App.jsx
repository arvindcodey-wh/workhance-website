import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About Us";
import Services from "./pages/Services";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import InsightDetail from "./pages/InsightDetail";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/insights/:id" element={<InsightDetail />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;