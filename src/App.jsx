import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Component import
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import CarList from "./components/CarList/CarList";
import Contact from "./components/Contact/Contact";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import PackageDetails from "./components/CarList/PackageDetails";
import OurStory from "./components/Pages/OurStory";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
  <Route
    path="/"
    element={
      <>
        <Hero theme={theme} />
        <About />
        <Services />
        <CarList />
        <Testimonial />
        <Contact />
      </>
    }
  />
  <Route path="/package-details/:packageType" element={<PackageDetails />} />
  <Route path="/our-story" element={<OurStory />} /> {/* <- Route cho trang OurStory */}
</Routes>

      <Footer />
    </div>
  );
};

export default App;