import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
