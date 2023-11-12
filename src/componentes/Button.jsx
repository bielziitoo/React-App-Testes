
function Button() {

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
        <button onClick={(e) => handleClick(e)}>Clica aqui 🤷‍♂️</button>
    )
}

export default Button