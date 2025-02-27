
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import NavBar from './components/NavBar'
import Experience from './pages/Experience'
import './App.css'

function App() {

  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
