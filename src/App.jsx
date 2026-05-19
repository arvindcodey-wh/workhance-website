import "./index.css";
import { Routes, Route } from "react-router-dom";

import AboutUs from "./pages/AboutUs";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import InsightDetail from "./pages/InsightDetail";

import ApplicationForm from "./Components/ApplicationForm";
import DetailedJob from "./Components/DetailedJob";
import MainLayout from "./Components/MainLayout";
import ScrollToTop from "./Components/ScrollToTop";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="careers" element={<Career />} />
          <Route path="contact" element={<Contact />} />
          <Route path="apply" element={<ApplicationForm />} />
          <Route path="jobs/:index" element={<DetailedJob />} />
          <Route path="insights/:id" element={<InsightDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;