import './index.css';
// import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <><Router>
    {/* <Navbar/> */}
    <div className="App">
    <Routes>
        <Route path="/about"
        element={<About/>}
        />
        < Route path="/" element={<Home/>}
        />
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
