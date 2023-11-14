import { useState, useEffect } from "react";
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx'

function Button() {

    const [count, setCount] = useState(0);
    const {theme} = useContext(ThemeContext);

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log(`o incrementador foi alterado ${count} vezes.`)
        }, 3000)
        return () => {
            clearTimeout(timer)
        };
    }, [count])

/*     let count = 0;

    const handleClick = (nome) => {
        if(count < 3){
            count++;
            console.log(`${nome} voce me clicou ${count} vezes.`)
        }
        else{
            console.log(`${nome} para de me clicar`)
        }

    }; */

    const handleClick = (e) => {
        e.target.textContent = 'Ai cara'
    }

    return(
        <div className="div-Button-class">
            <div className={`div-btn-render ${theme === "dark" ? "dark-btn-render" : ""}`}>
                <button onClick={() => setCount(prevCount => prevCount + 1)} className="btn-render">Render</button>
                <p className="p-render">Renderizou: {count}</p>
            </div>
            <button onClick={(e) => handleClick(e)} className={`btn-clicaai ${theme === "dark" ? "dark-btn-clicaai" : ""}`}>Clica aqui 🤷‍♂️</button>
        </div>
        
    )
}

export default Button