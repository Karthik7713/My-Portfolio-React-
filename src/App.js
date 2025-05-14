// src/App.js
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import About from './containers/About/About';
import Home from './containers/Home/Home';
import Contact from './containers/Contact/Contact';
import Skills from './containers/Skills/Skills';
import Resume from './containers/Resume/Resume';
import Portfolio from './containers/Portfolio/Portfolio';
import Navbar from "./componenets/Navbar/Navbar";

// ✅ Import your background particles
// import ParticleBackground from "./Utils/ParticleBackground";

function App() {
  return (
    <div className="App">
      {/* <ParticleBackground /> */}

      <Navbar />

      <div className="App_main-page-cnt" style={{ position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
