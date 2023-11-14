import { useState, useEffect } from "react";
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx'

function UseEffect () {

    const [user, setUser] = useState();
    const {theme} = useContext(ThemeContext);

    useEffect(() => {
        fetch('https://api.github.com/users/bielziitoo')
        .then((res) => res.json())
        .then((json) => setUser(json));
    }, [])

    return(
        <>
            
            {user && (
                <div className={`div-github-api ${theme === "dark" ? "dark-github-api" : ""}`}>
                    <h2>Dados do usuário github:</h2>
                    <div className="github-dados">
                        <h3>Nome: {user.name}</h3>
                        <p>Bio: {user.bio}</p>
                    </div>
                    <img src={user.avatar_url} alt="foto de perfil github" width={100} height={100} className="github-avatar"/>
                </div>
            )}
        </>
    )
}

export default UseEffect