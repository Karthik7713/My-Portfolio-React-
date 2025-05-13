import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from './containers/About/About';
import Home from './containers/Home/Home';
import Contact from './containers/Contact/Contact';
import Skills from './containers/Skills/Skills';
import Resume from './containers/Resume/Resume';
import Portfolio from './containers/Portfolio/Portfolio';
import Navbar from "./componenets/Navbar/Navbar";

function App() {
  return (
   <div className="App">

<Navbar/>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
