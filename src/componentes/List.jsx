import PropTypes from 'prop-types'
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx'

function List(props) {
    
    const items = props.items;
    const categoria = props.categoria;
    const {theme} = useContext(ThemeContext);

    //frutas.sort((a, b) => a.nome.localeCompare(b.nome)); //nomes em alfabetico
    //frutas.sort((a, b) => b.nome.localeCompare(a.nome)); //nomes em anti alfabetico
    //frutas.sort((a, b) => a.calorias - b.calorias); //Calorias em decrescente
    //frutas.sort((a, b) => b.calorias - a.calorias); //Calorias em crescente

    //const lowCal = frutas.filter(fruta => fruta.calorias < 60);
    //const highCal = frutas.filter(fruta => fruta.calorias >= 60);

    const listItens = items.map(fruta => <li key={fruta.id}>{fruta.nome}: &nbsp; <b>{fruta.calorias}</b> calorias.</li>);

    return(
        <div className={`div-List ${theme === "dark" ? "dark-div-List" : ""}`}>
            <h3 className='h3-List'>{categoria}</h3>
            <ul className='ul-List'>{listItens}</ul>
        </div>
            
    )
}

List.propTypes = { 
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, 
                                              nome: PropTypes.string, 
                                              calorias: PropTypes.string})),
    categoria: PropTypes.string
}

List.defaultProps = {
    items: [{id: 1, nome: 'item1', calorias: 0}, 
            {id: 2, nome: 'item2', calorias: 0}, 
            {id: 3, nome: 'item3', calorias: 0}, 
            {id: 4, nome: 'item4', calorias: 0}, 
            {id: 5, nome: 'item5', calorias: 0},],
    categoria: 'Categoria'
}

export default List