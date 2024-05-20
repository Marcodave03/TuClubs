import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import ClubPage from "./pages/ClubPage/ClubPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AlertBar from "./components/AlertBar/AlertBar.jsx";
import Discover from "./components/Discover/Discover.jsx";
import EventPage from "./pages/EventPage/EventPage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <AlertBar />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/clubs" element={<Discover />} />
          <Route path="/club/:imageKey" element={<ClubPage />} />
          <Route path="/events" element={<EventPage/>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
