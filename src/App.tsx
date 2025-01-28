import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PlacesToVisit from "./components/PlacesToVisit";
import Cairo from "./Cities/Cairo";
import Luxor from "./Cities/Luxor";
import Alexandria from "./Cities/Alexandria";
import Aswan from "./Cities/Aswan";
import SouthSinai from "./Cities/SouthSinai";
import Fayoum from "./Cities/Fayoum";
import Matrouh from "./Cities/Matrouh";
import PlacesLayout from "./components/PlacesLayout";
import TopUp from "./hooks/TopUp";
import Music from "./hooks/Music";

export default function App() {
  return (
    <Router>
      <Music />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/places" element={<PlacesToVisit />}>
          <Route index element={<PlacesLayout />} />
          <Route path="cairo" element={<Cairo />} />
          <Route path="luxor" element={<Luxor />} />
          <Route path="aswan" element={<Aswan />} />
          <Route path="alexandria" element={<Alexandria />} />
          <Route path="southSinai" element={<SouthSinai />} />
          <Route path="fayoum" element={<Fayoum />} />
          <Route path="matrouh" element={<Matrouh />} />
        </Route>
      </Routes>
      <TopUp />
    </Router>
  );
}
