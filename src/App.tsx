import './App.css';
import { BrowserRouter, Routes, Route,RedirectFunction, useNavigate} from "react-router-dom";
import Header from './component/Header/Header';
import Home from './container/Home/Home';
import Book from './container/Books/Books';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path='/' element={<Home/>}/>
          <Route path="/book" element={<Book />} />
      </Routes>

    </div>
  );
}

export default App;
