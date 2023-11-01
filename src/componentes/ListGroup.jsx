import { useState } from "react";
import PropTypes from 'prop-types'

function ListGroup(props) {

    let items = [
        props.item1,
        props.item2,
        props.item3,
        props.item4,
        props.item5
    ];

    const [selecionado, setSelecionado] = useState(-1)

    return (
        <div className="div-ul">
            <h1>{props.title}</h1>
            {/*A expressao && quando a primeira condicao é true, retorna a segunda*/}
            {items.length === 0 && <p>Nenhum item encontrado.</p>}
            <ul className="ul-itens">
                {items.map((item, index)=> 
                <li 
                    className={selecionado === index ? 'li-ul ativo' : 'li-ul'}
                    key={item} 
                    onClick={() => { setSelecionado(index); }}
                >
                    {item} 
                </li>
                )
                }
            </ul>
        </div>
    ); 
}

ListGroup.propTypes = {
    title: PropTypes.string,
    item1: PropTypes.string,
    item2: PropTypes.string,
    item3: PropTypes.string,
    item4: PropTypes.string,
    item5: PropTypes.string,
}

ListGroup.defaultProps = {
    title: 'Lista',
    item1: 'Sao Paulo',
    item2: 'Florianopolis',
    item3: 'Belo Horizonte',
    item4: 'Rio de Janeiro',
    item5: 'Porto Alegre',
}

export default ListGroup