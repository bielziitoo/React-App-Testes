import { useState } from "react";
import ListGroup from "./ListGroup";

function NewList (){
    const [clicou, setClicou] = useState('')
    const [item1, setItem1] = useState('')
    const [item2, setItem2] = useState('')
    const [item3, setItem3] = useState('')
    const [item4, setItem4] = useState('')
    const [item5, setItem5] = useState('')
    const [titulo, setTitulo] = useState('')

    const handleInputs = event => {
        event.preventDefault();
        console.log(titulo);

        <ListGroup title={titulo}></ListGroup>

        setItem1('')
        setItem2('')
        setItem3('')
        setItem4('')
        setItem5('')
        setTitulo('')
    }

    return (
        <div className="div-inicial-new-list">
            <button onClick={() => setClicou('clicado')} className="criar-new-list">Criar nova Lista</button>

            {clicou === 'clicado' &&
                <div className="div-new-list">
                    <form onSubmit={handleInputs} className="div-new-list">
                        <input type="text" placeholder="Título" className="input-new-list" value={titulo} onChange={event => setTitulo(event.target.value)}/>
                        <input type="text" placeholder="Item 1" className="input-new-list" value={item1} onChange={event => setItem1(event.target.value)}/>
                        <input type="text" placeholder="Item 2" className="input-new-list" value={item2} onChange={event => setItem2(event.target.value)}/>
                        <input type="text" placeholder="Item 3" className="input-new-list" value={item3} onChange={event => setItem3(event.target.value)}/>
                        <input type="text" placeholder="Item 4" className="input-new-list" value={item4} onChange={event => setItem4(event.target.value)}/>
                        <input type="text" placeholder="Item 5" className="input-new-list" value={item5} onChange={event => setItem5(event.target.value)}/>
                        <button type="submit" onClick={() => handleInputs} className="submit-new-list">Send</button>
                    </form>
                </div>
            }
        </div>
    )   
}

export default NewList

