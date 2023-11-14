import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {

    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <div className={`header-um ${theme === "dark" ? "dark-header" : ""}`}>
            <h1 className="nome-pagina">Portfólio</h1>
            <button onClick={toggleTheme} className="btn-toggle-theme">Mudar tema <p className="p-btn-theme">O tema atual é: {theme}</p></button>
        </div>
    );
}

export default Header