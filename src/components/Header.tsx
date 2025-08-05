import { Link } from "react-router-dom"

export default function Header() {
  return (
    <nav className="bg-gray-800 border-b border-gray-700 p-4">
      <ul className="flex space-x-4 justify-center">
        <li>
          <Link to="/" className="text-white hover:text-gray-300 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-gray-300 transition-colors">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-white hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
} 