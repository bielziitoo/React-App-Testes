import { Link } from "react-router-dom"
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx'

const Navbar = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <nav className="nav-bar">
        <ul>
            <li>
                <Link to='/home' className={`as ${theme === "dark" ? "dark-as" : ""}`}>Home</Link>
                <Link to='/contato' className={`as ${theme === "dark" ? "dark-as" : ""}`}>Contato</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar