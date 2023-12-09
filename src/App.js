import "./App.css";
import Home from "./Home";
import Gallery from "./components/Gallery";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Puzzle from "./components/Puzzle";
import ImageData from "./ImageData";
import { isError, isLoading } from "@auth0/auth0-react";

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/puzzle" element={<Puzzle />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
