import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./container/Home/Home";
import About from "./container/About/About";
import Portfolio from "./container/Portfolio/Portfolio";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
