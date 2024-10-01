import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./src/home";
import About from "./src/about";

const App = () => {
  <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>;
};

export default App
