

import "./index.css";
import { Route, Routes } from "react-router-dom";

import AboutUs from "./Pages/AboutUs";
import Career from "./Pages/Career";
import ApplicationForm from "./Components/ApplicationForm";
import DetailedJob from "./Components/DetailedJob";

import MainLayout from "./Components/MainLayout";
import ScrollToTop from "./Components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import InsightDetail from "./Pages/InsightDetail";
function App() {
  return (
    <div>
      <Toaster></Toaster>
      <ScrollToTop></ScrollToTop>

      <Routes>
        <Route path="/" element={<MainLayout></MainLayout>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="about-us" element={<AboutUs></AboutUs>}></Route>
          <Route path="services" element={<Services />} />
          <Route path="careers" element={<Career></Career>}></Route>
          <Route path="contact" element={<Contact />} />
          <Route
            path="apply"
            element={<ApplicationForm></ApplicationForm>}
          ></Route>
          <Route
            path="jobs/:index"
            element={<DetailedJob></DetailedJob>}
          ></Route>
          <Route path="insights/:id" element={<InsightDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
// import Footer from "./components/Footer";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ScrollToTop from "./components/ScrollToTop";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About Us";
// import Services from "./pages/Services";
// import Career from "./pages/Career";
// import Contact from "./pages/Contact";
// import InsightDetail from "./pages/InsightDetail";

// function App() {
//   return (
//     <BrowserRouter>
//     <ScrollToTop/>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/career" element={<Career />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/insights/:id" element={<InsightDetail />} />

//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;