import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Experience from './pages/Experience'
import Projects from './pages/Projects';
import ProjectDisplay from './pages/ProjectDisplay';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import Contact from './pages/Contact';



function App() {
  return (
    <div className="App">
      <Router>
        <ParticleBackground />
        <Navbar />
        <Routes>
          <Route path="Developer-of-the-21st-Age/" element={<Home />} />
          <Route path="Developer-of-the-21st-Age/projects" element={<Projects />} />
          <Route path="Developer-of-the-21st-Age/project/:id" element={<ProjectDisplay />} />
          <Route path="Developer-of-the-21st-Age/experience" element={<Experience />} />
          <Route path="Developer-of-the-21st-Age/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
