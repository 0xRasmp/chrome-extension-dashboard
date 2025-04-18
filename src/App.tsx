


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import "./App.css"
import Home from "./pages/home/index"
import About from "./pages/about/index"
import Contact from "./pages/contact/index"

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        {/* Navigation */}
        <nav className="bg-gray-100 p-4">
          <ul className="flex space-x-4 justify-center">
            <li>
              <Link to="/" className="text-blue-600 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-blue-600 hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-blue-600 hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

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
