import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import InsightDetail from "./Pages/InsightDetail";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/insights/:id" element={<InsightDetail />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;