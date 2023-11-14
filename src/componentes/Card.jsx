import pfp from '/src/assets/pfp.jpg'
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx'

function Card() {
    const {theme} = useContext(ThemeContext);

    return (
        <div className={`card ${theme === "dark" ? "dark-card" : ""}`}>
            <img src={pfp} alt="foto de perfil" className="pfp"/>
            <h2 className='nome'>Gabriel Pereira</h2>
            <div className='cardP'>
            <p>Programador Front-End e estudante de Sistema Para Internet na Uniasselvi.</p>
            </div>
        </div>
    );

}

export default Card