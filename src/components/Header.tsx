import { Link } from "react-router-dom"

export default function Header() {
  return (
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
  )
} 