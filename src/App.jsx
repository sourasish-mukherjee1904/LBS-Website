

// export default App
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LBSHallAbout from "./components/LBSHallAbout";
import WordsCarousel from "./components/WordsCarousel";
import CollectionSection from "./components/CollectionSection";
import EventSection from "./components/EventSection";
import FacilityPage from "./components/FacilityPage";
import SportsEventsPage from "./components/SportsEvents"; 
import TechEventsPage from "./components/TechEvents"; 
import CulturalEventsPage from "./components/CulturalEvents";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page with all sections */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <HeroSection />
              <LBSHallAbout />
              <WordsCarousel />
              <CollectionSection />
              <EventSection />
            </>
          }
        />

        {/* Facility Detail Page */}
        <Route path="/facility" element={<FacilityPage />} />
        <Route path="/sports-events" element={<SportsEventsPage />} />
        <Route path="/tech-events" element={<TechEventsPage />} />
        <Route path="/cultural-events" element={<CulturalEventsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
