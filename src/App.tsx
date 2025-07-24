


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Home from "./pages/home/index"
import About from "./pages/about/index"
import Contact from "./pages/contact/index"

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />

        {/* Page Content */}
        <main className="container-fluid mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
