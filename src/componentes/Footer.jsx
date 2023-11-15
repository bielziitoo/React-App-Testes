import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx'

function Footer(){

    const {theme} = useContext(ThemeContext);

    return(
        <footer className="footer">
            <p className={`p-footer ${theme === "dark" ? "dark-p-footer" : ""}`}>&copy; {new Date().getFullYear()} Portfólio Gabriel Pereira.</p>
        </footer>
    );
}

export default Footer