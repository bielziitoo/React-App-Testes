/* import Header from './componentes/Header.jsx' */
import Navbar from './componentes/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext.jsx'
import './App.css'
import './index.css'

function App() {

  const {theme} = useContext(ThemeContext);
  console.log(theme)

  return (
    <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default App
