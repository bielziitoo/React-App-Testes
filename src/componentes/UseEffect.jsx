import { useState, useEffect } from "react";

function UseEffect () {

    const [count, setCount] = useState(0);
    const [user, setUser] = useState();

    useEffect(() => {
        console.log('Salve a cada render')
    }, [count])

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log(`o incrementador foi alterado ${count} vezes.`)
        }, 3000)
        return () => {
            clearTimeout(timer)
        };
    }, [count])

    useEffect(() => {
        fetch('https://api.github.com/users/bielziitoo')
        .then((res) => res.json())
        .then((json) => setUser(json));
    }, [])

    return(
        <>
            <div>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>Render</button>
                <p>{count}</p>
            </div>
            {user && (
                <div className="div-github-api">
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