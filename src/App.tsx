import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./container/Home/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
