


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Login from "./pages/login/index"
import Signup from "./pages/signup/index"
import Dashboard from "./pages/dashboard/index"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
