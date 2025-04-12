import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./COMPONENTS/footer/Footer";
import ThemeProvider from "./COMPONENTS/Theme/ThemeContext";

// Import Pages
import HomePage from "./PAGES/home_page/HomePage";
import ProjectsPage from "./PAGES/projects_page/ProjectsPage";
import StorePage from "./PAGES/store_page/StorePage";
import AboutMePage from "./PAGES/aboutme_page/AboutMePage";
import ExperimentsPage from "./PAGES/experiments_page/ExperimentsPage";
import MotionProjects from "./PAGES/projects_page/MotionProjects";
import DesignProjects from "./PAGES/projects_page/DesignProjects";
import BookingPage from "./PAGES/booking_page/BookingPage";
import BrandingProjects from "./PAGES/branding_projects_page/BrandingProjects";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/motion-projects" element={<MotionProjects />} />
            <Route
              path="/branding-projects"
              element={<BrandingProjects />}
            />
            {/* <Route path="/design-projects" element={<DesignProjects />} /> */}
            <Route path="/store" element={<StorePage />} />
            <Route path="/about-me" element={<AboutMePage />} />
            <Route path="/experiments" element={<ExperimentsPage />} />

            <Route path="/book-a-call" element={<BookingPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
