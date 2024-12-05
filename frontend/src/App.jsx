import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import Home from "../pages/Home";
import Leaderboard from "../pages/Leaderboard";
import Game from "../pages/Game";

export default function App() {
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    async function getMaps() {
      const res = await axiosInstance.get("/api/maps");

      setMaps(res.data.maps);
    }
    getMaps();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home maps={maps} />} />
          <Route path="/leaderboard" element={<Leaderboard maps={maps} />} />
          <Route path="/game/:id" element={<Game maps={maps} />} />
        </Routes>
      </Router>
    </>
  );
}
