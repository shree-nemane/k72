import React, { useRef } from "react"
import { Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Agence from "./pages/Agence"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import Navbar from "./components/Navigation/Navbar"
import FullScreenNav from "./components/Navigation/FullScreenNav"
import ScrollToTop from "./components/scroll/ScrollToTop"

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <FullScreenNav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  )
}

export default App