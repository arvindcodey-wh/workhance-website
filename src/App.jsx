import { useState } from "react";

import "./index.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AboutUs from "./Pages/AboutUs";
import Career from "./Pages/Career";
import ApplicationForm from "./Components/ApplicationForm";
import DetailedJob from "./Components/DetailedJob";
import Footer from "./Components/Footer";
import MainLayout from "./Components/MainLayout";
import ScrollToTop from "./Components/ScrollToTop";
import { Toaster } from "react-hot-toast";
function App() {


  return (
      <div>
        <Toaster></Toaster>
        <ScrollToTop></ScrollToTop>
        
        <Routes>
          <Route path="/" element={<MainLayout></MainLayout>}>
            <Route path="about-us" element={<AboutUs></AboutUs>}></Route>
            <Route path="careers" element={<Career></Career>}></Route>
            <Route
              path="apply"
              element={<ApplicationForm></ApplicationForm>}
            ></Route>
            <Route
              path="jobs/:index"
              element={<DetailedJob></DetailedJob>}
            ></Route>
          </Route>
        </Routes>
      </div>
    
  );
}

export default App;
